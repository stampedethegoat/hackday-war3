require('dotenv').config()
const datadog      = require("dogapi");
const w3g          = require('w3g');
const fs           = require('fs');
const replayParser = require("./parser.js");
const raceParser   = require("./raceParser.js");
const replayFolder = '/Users/ben.basuni/Desktop/war3-hackday/replays';

datadog.initialize({
  api_key : process.env.API_KEY,
  app_key : process.env.APP_KEY,
});

const aggregateMetrics = async (gameObj, result) => {
  let orc = hu = ne = rdm = ud = 0;
  for (let j = 0; j < gameObj.length; j++) {
    let players = [gameObj[j].player1, gameObj[j].player2];
    for (let i = 0; i < players.length; i++) {
      if (i === 0) {
        result.push({
          metric : "war3.gameLength",
          points : `${gameObj[j].length.split(' ')[0]}`,
          tags   : [`player:${players[0].name}`, `player:${players[1].name}`]
        });
      }

      result.push({
        metric : "war3.apm",
        points : `${players[i].apm}`,
        tags   : [`player:${players[i].name}`]
      });

      switch (players[i].race) {
        case 'Orc':
          orc++;
          result = result.concat(raceParser.orcRace(players[i]));
          break;
        case 'Human':
          hu++;
          result = result.concat(raceParser.huRace(players[i]));
          break;
        case 'Undead':
          ud++;
          result = result.concat(raceParser.udRace(players[i]));
          break;
        case 'Night Elf':
          ne++;
          result = result.concat(raceParser.neRace(players[i]));
          break;
        case 'Random':
          rdm++;
          result = result.concat(raceParser.randomRace(players[i]));
          break;
      }
    }
  }

  result = result.concat({
    metric : "war3.orc",
    points : orc,
    type   : "gauge",
    tags   : [`player:total_orc`]
  },
  {
    metric : "war3.hu",
    points : hu,
    type   : "gauge",
    tags   : [`player:total_hu`]
  },
  {
    metric : "war3.ud",
    points : ud,
    type   : "gauge",
    tags   : [`player:total_ud`]
  },
  {
    metric : "war3.ne",
    points : ne,
    type   : "gauge",
    tags   : [`player:total_ne`]
  },
  {
    metric : "war3.rdm",
    points : rdm,
    type   : "gauge",
    tags   : [`player:total_rdm`]
  });

  return result;
};

const getReplayData = async () => {
  return await new Promise((resolve, reject) => {
    let replayData = [];
    fs.readdir(replayFolder, (err, files) => {
      files.forEach((replayFile, index) => {
        if (replayFile.endsWith('.w3g')){
          let item = new w3g(`${replayFolder}/${replayFile}`);
          replayData.push(replayParser(item));
        }
      });
      resolve(replayData);
    });
  });
}

const submitMetrics = async () => {
  let gameObj = await getReplayData();
  let results = await aggregateMetrics(gameObj, []);
  datadog.metric.send("war3.total_games", gameObj.length);
  datadog.metric.send_all(results, (err, res) => console.log(res));
}

module.exports = { submitMetrics }
