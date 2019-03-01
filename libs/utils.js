'use strict';

/**
 * 格式化状态
 * @param status
 * @returns {number}
 */
exports.formatUserStatus = function (status) {
    return !status || status === 0 ? 0 : 1;
};

/**
 * 格式化用户性别(0: 未知，1：男，2：女)
 * @param gender
 */
exports.formatUserGender = function(gender){
    if(gender === 0){
        return 1;
    } else if(gender === 1){
        return 2;
    } else {
        return 0;
    }
};