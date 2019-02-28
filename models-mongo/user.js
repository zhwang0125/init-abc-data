'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userid: String,
    username: String,
    mobilePhoneNumber: String,
    Reject: Number,

    createdAt: Date
});

exports = module.exports = mongoose.model('User', userSchema, '_User');