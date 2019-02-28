'use strict';

/**
 * 用户表
 * @type {Sequelize}
 * @date 2018-11-14
 */
const Sequelize = require("sequelize");
const baseSequelize = require('./');
const TABLE_NAME = 'dne_user';

let Model = baseSequelize.define(TABLE_NAME, {
    user_id: Sequelize.INTEGER,             // 用户ID,
    nick_name: Sequelize.STRING,            // 昵称
    user_name: Sequelize.STRING,            // 用户名
    telephone: Sequelize.STRING,            // 手机号
    gender: Sequelize.INTEGER,              // 性别
    head_url: Sequelize.STRING,             // 头像

    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
    is_delete: Sequelize.INTEGER,
});

exports = module.exports = Model;