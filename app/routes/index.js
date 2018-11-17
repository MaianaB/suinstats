const express = require('express');
const rootRouter = express.Router();
const statsRouter = require('./api/stats.router');

rootRouter.get('/', function(req, res, next) {
    res.send('<h1>API Stats</h1>')
});

rootRouter.use('/stats', statsRouter);
 
module.exports = rootRouter;