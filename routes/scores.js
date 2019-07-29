const router = require('express').Router()

router.post('/score',(req,res)=>{
    id=req.body.id
    score=req.body.score
    User.findByIdAndUpdate({ _id: id },{$push:{quizzScores:score}},function(err,doc){
        if(err)
        return res.json(err)
        else
        return res.json({'success':true})
    })
})

router.get('/score',(req,res)=>{
    id=req.query.id
    User.findById(id,function(err,resp){
        if(err)
        return res.json(err)
        else
        return res.json(resp.quizzScores)
    })
})

module.exports=router