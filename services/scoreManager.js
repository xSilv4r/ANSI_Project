const User = require('../models/User')

exports.saveScore = function(id,score){
    User.findByIdAndUpdate({ _id: id },{$push:{quizzScores:score}},function(err,doc){
        if(err)
        return err
        else
        return doc
    })
}