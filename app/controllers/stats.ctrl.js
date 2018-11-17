var request = require('request');

const constants = require('../util/helpers/constants');


function alertaDispenser(req, res) {
    let message = "O despenser de racoes esta com problema envie alguem para conserta-lo imediatamente."
    let subject = "ALERTA ! DISPENSER COM PROBLEMAS";

    const email = {
        "message" : message,
        "subject": subject,
        "receiver": constants.RECEIVER
    }

    const data = {
        "url": constants.SENDEMAIL,
        "body": email,
        "json": true
    }

    request.post(data, function (error, response, body) {
        res.status(200);
        res.json(response.body);
    }) 
}


module.exports = {
    alertaDispenser: alertaDispenser
};