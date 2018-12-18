const SENDEMAIL = require('../util/services/sendEmail')
const pigService = require('../util/services/pigService')

function alertaDispenser(req, res) {
    let message = "O dispenser de racoes esta com problema envie alguem para conserta-lo imediatamente."
    let subject = "ALERTA ! DISPENSER COM PROBLEMAS";
    SENDEMAIL.sendEmail(subject, message, res);
}

async function dailyAnalysis(req, res){
    pigService.makeAnalytics(req, res);
}

module.exports = {
    alertaDispenser: alertaDispenser,
    dailyAnalysis: dailyAnalysis
};