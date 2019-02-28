'use strict';
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userId: String,
    username: String,
    mobilePhoneNumber: String,
    Reject: Number,

    createdAt: Date
});

mongoose.model('user', userSchema);