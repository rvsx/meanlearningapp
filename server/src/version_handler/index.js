var config = require('../../config'),
    routeHandlersMap = {
        'get': {},
        'post': {},
        'put': {},
        'delete': {}
    };

var mapResource = function(userResource) {
    routeHandlersMap.get[config.routes.UsersList] = userResource.saveUserProfile;
};

var handleVersionV1 = function(req, res, next) {
    routeHandlersMap[req.route.method.toLowerCase()][req.route.path](req, res, next);
};

module.exports = function(userResource) {
    mapResource(userResource);
    return handleVersionV1;
};