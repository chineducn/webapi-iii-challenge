const express = require('express');
const helmet = require('helmet');
const { validateUserId } = require('./middleware')
const { logger } = require('./middleware')
const server = express();

server.use(express.json())
server.use(helmet())
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.get('/users/:id', validateUserId, (req, res) => {
  res.send(`<h2>Let's get that bloody user!</h2>`)
});





module.exports = server;
