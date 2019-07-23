const mongoose = require('mongoose')
const User = require('./models/User')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport=require('passport')

const app = express()
app.use(passport.initialize());
require('./config/passport_config')(passport);
app.use(cors())
app.use( bodyParser.urlencoded({ extended : false }) );
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb+srv://ansi:9GvvEwCFf82LKiNh@ansi-m3yht.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(() =>{
    console.log('connected to database')
  }).catch(() =>{
    console.log('failed connected to database')
  })

const auth = require('./routes/auth');
const scores = require('./routes/scores')
app.use('/', auth)
app.use('/',scores)

app.listen(PORT, err => {
    if(err) console.error(err);
    console.log(`Listening for Requests on port: ${PORT}`);
})
module.exports = app