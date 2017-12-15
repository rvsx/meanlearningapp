var server = require('./app.js'),
    config = require("./config"),
    _ = require('lodash'),
    userSchema = require('./src/db/schema'),
    mongoose = require('mongoose');


//connect to mongodb
mongoose.connect(config.database.url, { useMongoClient: true });

mongoose.connection.on('error', function(error) {
    if (error) {
        console.log('error occured while connecting', error);
    }
});

mongoose.connection.on('connected', function() {
    console.log('Connected to mongoDb');
    //bind port to server
    server.listen(config.server.port, function() {
        console.log('Server is listening on port ------>', config.server.port);
    })
});


var userModel = require('./src/models/user')(userSchema, server),
    userResource = require('./src/resources/user_resource')(userModel);
debugger
require('./src/routes')(server, userResource);

module.exports = server;