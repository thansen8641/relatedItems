const db = require('./index');
const Game = require('./Game');
const gameData = require('./seed.json');

const seedData = (data) => {
  Game.insertMany(data)
    .then(() => {
      console.log('Game data seeded!')
    })
    .catch((err) => {
      console.error(err);
    });
};

seedData(gameData);