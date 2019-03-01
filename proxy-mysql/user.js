const Promise = require('bluebird');
const requestUtils = require('../libs/request_utils');
const utils = require('../libs/utils');
const userModel = require('../models-mysql/user');
const userDonutModel = require('../models-mysql/user_donut');
const userSweetModel = require('../models-mysql/user_sweet');

/**
 * 保存用户，纳币，甜甜圈等
 * @param entity
 */
exports.saveUser = async function (entity) {
    // 用户信息
    let user = {
        user_id: entity.user_id,
        nick_name: entity.nick_name,
        user_name: entity.user_name,
        telephone: entity.telephone,
        gender: entity.gender,
        head_url: entity.head_url,
        status: entity.status,
        create_time: entity.create_time
    };

    let donut = {
        user_id: entity.user_id,
        donut_count: entity.donut_count,
        net_value: entity.net_value,

        grand_total_donut_count: entity.donut_count,
        grand_total_donut_count_free: 0,
        grand_total_money_num: entity.net_value / 100,
        grand_total_donut_count_rmb: entity.net_value / 100
    };

    let sweet = {
        user_id: entity.user_id,
        sweet_count: entity.sweet_count,
        grand_total_sweet_count: entity.sweet_count
    };

    return Promise.all([
        userModel.create(user),
        userDonutModel.create(donut),
        userSweetModel.create(sweet)
    ]);
};

/**
 * 查询koolearn用户信息，保存用户
 * @param user
 * @returns {Promise}
 */
exports.findKooUserAndSave = async function (user) {
    let that = this;
    let kooUser = await requestUtils.getKooUserInfo(user.mobilePhoneNumber);
    if (kooUser === null) {
        return Promise.resolve({message: '无此用户'})
    }

    let entity = {
        user_id: kooUser.id,
        user_name: kooUser.userName,

        nick_name: user.nickname || kooUser.userName,
        telephone: user.mobilePhoneNumber,
        head_url: user.head_url || '',
        create_time: user.createdAt,

        gender: utils.formatUserGender(user.gender),
        status: utils.formatUserStatus(user.Reject),

        // 纳币和净值
        donut_count: user.coinnumber,
        net_value: user.money,
        sweet_count: user.candynumber
    };

    return that.saveUser(entity);
};
