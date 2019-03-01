const userMongoProxy = require('../proxy-mongo/user');
const userMysqlProxy = require('../proxy-mysql/user');
const Promise = require('bluebird');
const _ = require('lodash');
const eventproxy = require('eventproxy');


/**
 * 初始化用户数据
 * @param req
 * @param res
 */
exports.initUserData = async function (req, res) {
    res.json('1111');
    let limit = 100;
    let ops = {
        mobilePhoneNumber: {$exists: true}
    };

    // 总人数
    let count = await userMongoProxy.findCount(ops);
    let totalPage = 1 || Math.ceil(count / limit);
    let page = 1;

    for (; page <= totalPage; page++) {
        try {
            console.log('======================> ' + page);
            let users = await userMongoProxy.findList(ops, page, limit);
            console.log('【查询结果'+ users.length +'】');

            let list = [];
            _.forEach(users, function(user){
                list.push(userMysqlProxy.findKooUserAndSave(user));
            });
            await Promise.all(list);
            console.log('【执行存储】');
            console.log(page + '===========> 完毕');

            list = null;
            users = null;
        } catch (err) {
            console.log(page + '===========> 出错');
            console.log(err);
            break;
        }
    }
};

