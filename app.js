var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var PORT = process.env.PORT||3000
var st = process.env.TZ
var db = require('./mongo/database')

app.use(bodyParser.urlencoded({
    extended : true
}))

require('./routes/auth')(app, db)
//require('./routes/facebook')(app, db)
//require('./routes/place')(app, db)


app.listen(PORT,()=>{
    console.log('Server Running At '+PORT+' Port!')
})



