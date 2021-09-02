const express = require('express');
const server = express();

const errorHandler = require('./general-middleware');
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.use('/api/actions', actionsRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: "This endpoint does not exist" });
});

server.use(errorHandler);

module.exports = server;
