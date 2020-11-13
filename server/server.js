const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const db = require('../database');
const Game = require('../database/Game');

const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/api/games/:id/related', (req, res) => {
  Game.find({}).limit(10)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = server;