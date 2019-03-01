'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userid: String,
    username: String,
    nickname: String,
    mobilePhoneNumber: String,
    Reject: Number,
    gender: Number, // 0：男，1：女

    // 净值
    money: Number,
    coinnumber: Number,

    createdAt: Date
});

exports = module.exports = mongoose.model('User', userSchema, '_User');