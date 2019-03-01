'use strict';

/**
 * 用户表
 * @type {Sequelize}
 * @date 2018-11-14
 */
const Sequelize = require("sequelize");
const baseSequelize = require('./');

exports = module.exports = baseSequelize.baseDefine('dne_user', {
    user_id: Sequelize.INTEGER,             // 用户ID,
    nick_name: Sequelize.STRING,            // 昵称
    user_name: Sequelize.STRING,            // 用户名
    telephone: Sequelize.STRING,            // 手机号
    gender: Sequelize.INTEGER,              // 性别
    head_url: Sequelize.STRING,             // 头像
    status: Sequelize.INTEGER,              // 状态：0正常，1停用

    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
    is_delete: Sequelize.INTEGER,
});