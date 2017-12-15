var  config = require('../../config');
module.exports = function (server, userResource) {
    var versionHandler = require('../version_handler')(userResource);
    server.get(config.routes.UsersList, userResource.saveUserProfile);
};
