const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');

// 用户
router.get('/user/init', userControl.initUserData);

module.exports = router;
