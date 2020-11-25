const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = 3004;

require('../database');
const Game = require('../database/Game');

const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/api/games/one', (req, res) => {
  Game.find({})
    .then((games) => {
      let index = Math.floor(Math.random() * games.length);
      res.send(games[index]);
    })
    .catch((err) => {
      console.error(err);
    });
});

server.use('/api/games/:id/similar', (req, res) => {
  Game.find({})
    .then((games) => {
      let similarGames = [];

      let gameIndex = games.findIndex((currGame) => {
        return currGame._id.toString() === req.params.id.toString();
      })
      games.splice(gameIndex, 1);

      for (let i = 0; i < 20; i++) {
        let index = Math.floor(Math.random() * games.length);
        similarGames.push(games[index]);
        games.splice(index, 1);
      }
      res.send(similarGames);
    })
    .catch((err) => {
      console.error(err);
    });
});

server.use('/api/games/:id/together', (req, res) => {
  Game.find({ _id: req.params.id })
    .then((game) => {
      return Game.find({ system: game[0].system })
    })
    .then((games) => {
      let gameIndex = games.findIndex((currGame) => {
        return currGame._id.toString() === req.params.id.toString()
      })

      let togetherGames = [];
      togetherGames.push(games[gameIndex])

      games.splice(gameIndex, 1);

      for (let i = 0; i < 2; i++) {
        let index = Math.floor(Math.random() * games.length);
        togetherGames.push(games[index]);
        games.splice(index, 1);
      }
      res.send(togetherGames);
    })
    .catch((err) => {
      res.send(err);
    });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

module.exports = server;