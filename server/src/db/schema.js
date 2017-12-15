var mongoose = require('mongoose'),
schema = {
    username : String,
    userId : Number,
    trainings : {
        trainingId : Number,
        uploadedImag: String,
        status : Boolean
    }
};

exports.defineUserSchema = function(){
    return mongoose.model('learningApp', schema);
}


