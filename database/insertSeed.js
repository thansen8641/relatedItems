const db = require('./index');
const mongoose = require('mongoose')
const Game = require('./Game');
const gameData = require('./seed.json');

const seedData = (data) => {
  Game.insertMany(data)
    .then(() => {
      console.log('Game data seeded!');
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error(err);
    });
};

seedData(gameData);