var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var randomstring = require('randomstring')
var PORT = process.env.PORT||3000
var st = process.env.TZ
var db = require('./mongo/database')


app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({
    extended : true
}))

require('./routes/auth')(app, db)
//require('./routes/facebook')(app, db)
require('./routes/place')(app, db, randomstring)


app.listen(PORT,()=>{
    console.log('Server Running At '+PORT+' Port!')
})



