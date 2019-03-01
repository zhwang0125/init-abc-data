const userSchema = require('../models-mongo/user');

/**
 * 分页
 * @param ops
 * @param page
 * @param limit
* @return Array
*/
exports.findList = async function(ops, page, limit){
    return userSchema.find(ops).sort("createdAt").skip((page - 1) * limit).limit(limit).exec();
};

/**
 * 查询条数
 * @param ops
 * @returns Number
 */
exports.findCount = async function(ops){
    return userSchema.count(ops).exec();
};