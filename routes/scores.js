const router = require('express').Router()
const scoreManager = require('../services/scoreManager')

router.post('/score',(req,res)=>{
    id=req.body.id
    score=req.body.score
    User.findByIdAndUpdate({ _id: id },{$push:{quizzScores:score}},function(err,doc){
        if(err)
        return res.json(err)
        else
        return res.status(200)
    })
})

router.get('/score',(req,res)=>{
    if(id=req.query.id){
    User.findById(id,function(err,resp){
        if(err)
        return res.json(err)
        else
        return res.status(200).send(resp.quizzScores)
    })
    }
    else
    console.log('got no id')
})

module.exports=router