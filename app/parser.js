module.exports = replay => {
  let replayObj = {};
  console.log(`replay`, replay.filename);

  let player1 = goParsePlayer(replay.teams[0]);
  let player2 = goParsePlayer(replay.teams[1]);

  replayObj['filename'] = replay.filename.split("/").pop();
  replayObj['map']      = replay.game.map.split("/").pop().replace(/[^A-Za-z\s!?]/g,'').slice(0, -2).replace(/([A-Z])/g, ' $1').trim();
  replayObj['type']     = replay.game.type;
  replayObj['length']   = `${parseFloat(replay.header.length / 60000).toFixed(0)} mins`;
  replayObj['player1']  = player1;
  replayObj['player2']  = player2;

  return replayObj;
}

const goParsePlayer = player => {
  let playerObj = {};

  let getValOf = v => v[Object.keys(v)[0]];
  player = getValOf(player);

  playerObj['name']      = player.name;
  playerObj['apm']       = player.apm.toFixed(0);
  playerObj['race']      = player.race.replace(/([A-Z])/g, ' $1').trim();
  playerObj['heroes']    = goParseHeroes(player.heroes);
  playerObj['units']     = goParseUnits(player.units);
  playerObj['buildings'] = goParseBuildings(player.buildings);

  return playerObj;
}

const goParseHeroes = heroes => {
  let result = {};
  for (let hero in heroes) {
    if (hero !== 'order') {
      result[hero] = {
        "level"     : heroes[hero].level,
        "abilities" : heroes[hero]["abilities"]
      }
    }
  }

  return result;
}

const goParseUnits = units => {
  let order  = [];
  let result = {};
  for (let unit in units) {
    if (unit !== 'order') {
      result[unit] = units[unit];
    } else {
      for (let singleUnit in units.order) {
        if (!units.order[singleUnit].startsWith('-')) {
          order.push(units.order[singleUnit].substr(2));
        }
      }
    }
  }
  result['order'] = order;

  return result;
}

const goParseBuildings = buildings => {
  let order  = [];
  let result = {};
  for (let building in buildings) {
    if (building !== 'order') {
      result[building] = buildings[building];
    } else {
      for (let singleBuilding in buildings.order) {
        order.push(buildings.order[singleBuilding]);
      }
    }
  }
  result['order'] = order;

  return result;
}

