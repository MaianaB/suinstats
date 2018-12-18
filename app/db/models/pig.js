const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const porcoSchema = Schema({
    data_entrada: String,
    idade: String,
    local_origem: String,
    numero: String,
    peso: String,
    tipo: String,
    partos: Schema.Types.Mixed,
    cio: String
}, {collection : 'porco'});

module.exports = mongoose.model('porco', porcoSchema);