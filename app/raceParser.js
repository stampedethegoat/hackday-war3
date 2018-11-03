const orcRace = playerObj => {
  let metricArray = [{
    metric : "war3.orc",
    points : 1,
    type   : "count",
    tags   : [`player:${playerObj.name}`]
  }];

  if (playerObj.units.Peon) {
    metricArray.push({
      metric : "war3.orc.peon",
      points : playerObj.units.Peon,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Grunt) {
    metricArray.push({
      metric : "war3.orc.grunt",
      points : playerObj.units.Grunt,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Raider) {
    metricArray.push({
      metric : "war3.orc.raider",
      points : playerObj.units.Raider,
      tags   : [`player:${playerObj.name}`]
    });
  }


  if ('Blademaster' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.orc.hero.bm",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Shadow Hunter' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.orc.hero.sh",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Tauren Chieftain' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.orc.hero.tc",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Far Seer' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.orc.hero.fs",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  return metricArray;
}

const huRace = playerObj => {
  let metricArray = [{
    metric : "war3.hu",
    points : 1,
    type   : "count",
    tags   : [`player:${playerObj.name}`]
  }];

  if (playerObj.units.Peasant) {
    metricArray.push({
      metric : "war3.hu.peasant",
      points : playerObj.units.Peasant,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Footman) {
    metricArray.push({
      metric : "war3.hu.footman",
      points : playerObj.units.Footman,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Rifleman) {
    metricArray.push({
      metric : "war3.hu.rifleman",
      points : playerObj.units.Rifleman,
      tags   : [`player:${playerObj.name}`]
    });
  }


  if ('Archmage' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.hu.hero.am",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Mountain King' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.hu.hero.mk",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Blood Mage' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.hu.hero.bm",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Paladin' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.hu.hero.pl",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  return metricArray;

}

const udRace = playerObj => {
  let metricArray = [{
    metric : "war3.ud",
    points : 1,
    type   : "count",
    tags   : [`player:${playerObj.name}`]
  }];

  if (playerObj.units.Acolyte) {
    metricArray.push({
      metric : "war3.ud.acolyte",
      points : playerObj.units.Acolyte,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Ghoul) {
    metricArray.push({
      metric : "war3.ud.ghoul",
      points : playerObj.units.Ghoul,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj["units"]["Crypt Fiend"]) {
    metricArray.push({
      metric : "war3.ud.fiend",
      points : playerObj["units"]["Crypt Fiend"],
      tags   : [`player:${playerObj.name}`]
    });
  }


  if ('Death Knight' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ud.hero.dk",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Lich' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ud.hero.lich",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Dreadlord' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ud.hero.dl",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Crypt Lord' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ud.hero.cl",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  return metricArray;
}

const neRace = playerObj => {
  let metricArray = [{
    metric : "war3.ne",
    points : 1,
    type   : "count",
    tags   : [`player:${playerObj.name}`]
  }];

  if (playerObj.units.Wisp) {
    metricArray.push({
      metric : "war3.ne.wisp",
      points : playerObj.units.Wisp,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Archer) {
    metricArray.push({
      metric : "war3.ne.archer",
      points : playerObj.units.Archer,
      tags   : [`player:${playerObj.name}`]
    });
  }

  if (playerObj.units.Huntress) {
    metricArray.push({
      metric : "war3.ne.huntress",
      points : playerObj.units.Huntress,
      tags   : [`player:${playerObj.name}`]
    });
  }


  if ('Warden' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ne.hero.wd",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Demon Hunter' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ne.hero.dh",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Keeper of the Grove' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ne.hero.kotg",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  if ('Priestess of the Moon' in playerObj.heroes) {
    metricArray.push({
      metric : "war3.ne.hero.potm",
      points : 1,
      type   : "count",
      tags   : [`player:${playerObj.name}`]
    });
  }

  return metricArray;
}

const randomRace = playerObj => {
  return [{
    metric : "war3.rdm",
    points : 1,
    type   : "count",
    tags   : [`player:${playerObj.name}`]
  }];
}

module.exports = {
  orcRace,
  huRace,
  udRace,
  neRace,
  randomRace
}
