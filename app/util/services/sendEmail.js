const request = require('request');
const constants = require('../../util/helpers/constants');

function sendEmail(subject, message, res){
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

    return request.post(data, function (error, response, body) {
        console.log(response);
        if(res){
            res.status(200);
            res.json(response.body);    
        }
    })
}


module.exports = {
    sendEmail: sendEmail
}