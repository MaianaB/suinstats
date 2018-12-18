const Pig = require('../../db/models/pig');
const SENDEMAIL = require('./sendEmail')

async function makeAnalytics(req, res){
    let mothersPig = await Pig.find({tipo: "MATRIZ"});
    let today = new Date();
    let month = (today.getMonth()+1 < 10 ? '0'+today.getMonth()+1 : today.getMonth()+1);
    today = today.getDate() + "/" + month + "/" + today.getFullYear();

    let lessPig = [];
    let morePig = [];
    let lessDay = [];
    const MIN_INTERVAL = 144 * 24 * 60 * 60 * 1000;

    for(mother of mothersPig){
        for(let i=0; i < mother.partos.length; i++){
            if(Object.keys(mother.partos[i])[0] === today){
                let numberChildbed = parseInt(Object.values(mother.partos[i])[0]);
                if(numberChildbed < 6){
                    lessPig.push(mother.numero);
                } else if(numberChildbed > 12) {
                    morePig.push(mother.numero);
                }
                if(i > 0){
                    let oldChildBed = Object.keys(mother.partos[i-1])[0].split("/");
                    let dateOldChildBed = new Date(oldChildBed[2], parseInt(oldChildBed[1])-1, oldChildBed[0]);
                    let interval = new Date() - dateOldChildBed;
                    (interval < MIN_INTERVAL) && lessDay.push(mother.numero);
                }             
            }
        }
    }

    let lessPigMessage = "Matriz(es) com menos de 6 filhotes no parto: "+lessPig+"\n";
    let morePigMessage = "Matriz(es) com mais de 12 filhotes no parto: "+morePig+"\n";
    let lessDayMessage = "Matriz(es) com intervalo menor que 144 dias entre os partos: "+lessDay+"\n";

    if(lessPig.length > 0 || morePig.length > 0 || lessDay.length > 0){
        let subject = "Alerta de métricas anormais";
        let message = "";
        if(lessPig.length > 0) message += lessPigMessage;
        if(morePig.length > 0) message += morePigMessage;
        if(lessDay.length > 0) message += lessDayMessage;
        console.log(subject, message);
        SENDEMAIL.sendEmail(subject, message, res);
    }
}

module.exports = {
    makeAnalytics: makeAnalytics
}