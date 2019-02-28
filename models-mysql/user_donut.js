'use strict';

/**
 * 用户纳币表
 * @type {Sequelize}
 * @date 2018-11-14
 */
const Sequelize = require("sequelize");
const baseSequelize = require('./');
const TABLE_NAME = 'dne_donut_currency';

let Model = baseSequelize.define(TABLE_NAME, {
    id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,                     // 用户ID,
    donut_count: Sequelize.INTEGER,                 // 纳币数
    grand_total_donut_count: Sequelize.INTEGER,     // 累计获得纳币数
    grand_total_donut_count_free: Sequelize.INTEGER,    // 累计获免费币数
    grand_total_donut_count_rmb: Sequelize.INTEGER,     // 累计

    net_value: Sequelize.DECIMAL(10, 2),                 // 净值
    grand_total_money_num: Sequelize.DECIMAL(10, 2),     // 累计充值人民币数

    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
    is_delete: Sequelize.INTEGER,
});

exports = module.exports = Model;