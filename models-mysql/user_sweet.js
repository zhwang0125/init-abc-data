'use strict';

/**
 * 用户纳币表
 * @type {Sequelize}
 * @date 2018-11-14
 */
const Sequelize = require("sequelize");
const baseSequelize = require('./');
const TABLE_NAME = 'dne_sweet_donut';

let Model = baseSequelize.define(TABLE_NAME, {
    id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,          // 用户ID,
    sweet_count: Sequelize.INTEGER,      // 当前甜甜圈数
    grand_total_sweet_count: Sequelize.INTEGER, // 累计甜甜圈数

    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
    is_delete: Sequelize.INTEGER,
});

exports = module.exports = Model;