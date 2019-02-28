const userMongoProxy = require('../proxy-mongo/user');
const promise = require('bluebird');

/**
 * 初始化用户数据
 * @param req
 * @param res
 */
exports.initUserData = function(req, res){
    let page = 1;
    let limit = 10;

    promise.all([
        userMongoProxy.findCount({}),
        userMongoProxy.findList({}, page, limit)
    ]).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
};