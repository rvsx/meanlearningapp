var UserProfileDBService = {},
    userProfileResource = {},
    config = require('../../config'),
    _ = require('lodash');

module.exports = function(userProfileDBService) {
    UserProfileDBService = userProfileDBService;
    return userProfileResource;
};


userProfileResource.saveUserProfile = function(req, res, next) {
    console.log('[Resource] >> [saveUserProfile]');
    UserProfileDBService.save(req.body, function(err, data) {
        if (err) {
            console.log('[Resource] >> [saveUserProfile] error while saving', err);
            return res.status(500).json({
                err: err
            });
        }
        console.log('[Resource] >> [saveUserProfile] Successfully saved')
        return res.status(200).json({ status: 'Successfull!!!!!!!!' });
    })
}