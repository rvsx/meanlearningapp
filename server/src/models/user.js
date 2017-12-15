var UserModel = {},
    config = require('../../config'),
    _ = require('lodash'),
    UserProfileDBService = {},
    MongoDbClient = {};

module.exports = function(userModel, _mongodbClient) {
    UserModel = userModel;
    MongoDbClient = _mongodbClient;
    return UserProfileDBService;
};



UserProfileDBService.save = function(reqbody, cb) {
    logger.debug('[models] >> [user] >> [save]');
    var _userModel = new UserModel(reqbody);
    _userModel.save(function(err, data){
        if(err) {
            console.log('[UserProfileDBService] >> [save] Failed to save', err);
            return cb(err);
        }
        cb(null, data);
    })
};