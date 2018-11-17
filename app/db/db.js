const mongoose = require('mongoose');
const CONSTANTS = require('../util/helpers/constants');

mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + CONSTANTS.DATABASE);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});