const express = require('express');
const statsRouter = express.Router();
const statsCtrl = require('../../controllers/stats.ctrl');

statsRouter.get('/alertaDispenser', statsCtrl.alertaDispenser);
statsRouter.get('/dailyAnalysis', statsCtrl.dailyAnalysis);

module.exports = statsRouter;   