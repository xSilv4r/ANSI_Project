const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizzSchema = new Schema ({
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    quizzName:{
        type:String
    },
    bestScore:{
        type:Number
    }
})

module.exports = QuizzSchema = mongoose.model('Quizz',QuizzSchema)