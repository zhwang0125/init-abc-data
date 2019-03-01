const request = require("request");
const Promise = require("bluebird");

/**
 * get请求
 * @param url
 */
exports.get = function (url) {
    let options = {
        url: url,
        method: 'GET',
        timeout: 30000,
        head: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        json: true
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, response, body) {
            if (err) return reject(err);
            resolve(body);
        });
    });
};

/**
 * post请求
 * @param url
 * @param body
 */
exports.post = function (url, body) {
    let options = {
        url: url,
        method: 'POST',
        timeout: 30000,
        heads: {
            'content-type': 'application/json;charset=utf-8'
        },
        body: body,
        json: true
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, response, body) {
            if (err) return reject(err);
            resolve(body);
        });
    });
};

/**
 * 获取用户信息
 * @param phone
 */
exports.getKooUserInfo = async function (phone) {
    let url = 'http://login.donut.cn/user/findUserByMobilePhone?mobilePhone=' + phone;
    return this.get(url).then(function (result) {
        if (result.code === 0) {
            return Promise.resolve(result.data);
        } else {
            console.log('【无此koolearn用户】' + phone);
            return Promise.resolve(null);
        }
    });
};