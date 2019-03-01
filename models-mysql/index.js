"use strict";

const Sequelize = require("sequelize");
const config = require('../config');
const mysqlConf = config.mysql;

let sequelize = new Sequelize(mysqlConf.database, mysqlConf.username, mysqlConf.password, {
    host: mysqlConf.host,
    port: mysqlConf.port,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00',         // 时区
    operatorsAliases: false,    // 操作符别名
    logging: false,             // 日志输出
});

sequelize.authenticate().then(function() {
    console.log("mysql connect success");
}).catch(function(err) {
    console.error(err);
    throw err;
});

/**
 * base define 方法
 * @param tableName
 * @param obj
 * @returns {Model}
 */
sequelize.baseDefine = function(tableName, obj){
    return sequelize.define(tableName, obj, {
        freezeTableName: true,      // 取消表名复数
        timestamps: false           // 取消createdAt和updatedAt
    });
};

exports = module.exports = sequelize;