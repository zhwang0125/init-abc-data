const userSchema = require('../models-mongo/user');

/**
 * 分页
 * @param ops
 * @param page
 * @param limit
* @return Array
*/
exports.findList = function(ops, page, limit){
    return userSchema.find(ops).sort("createdAt").skip((page - 1) * limit).limit(limit).exec();
};

/**
 * 查询条数
 * @param ops
 * @returns Number
 */
exports.findCount = function(ops){
    return userSchema.count(ops).exec();
};