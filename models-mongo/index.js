"use strict";
const config = require('../config');
const mongoose = require('mongoose');
mongoose.connect(config.mongodb, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connect success");
});