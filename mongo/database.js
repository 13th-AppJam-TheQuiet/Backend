var mongoose = require('mongoose')

var db = mongoose.connect("mongodb://localhost/13th_APPJAM", (err)=>{
    if(err){
        console.log('DB Error!')
        throw err
    }
    else {
        console.log("DB Connect Success!")
    }
})

var PlaceSchema = new mongoose.Schema({
    placeid : {
        type : String
    },
    placename : {
        type : String
    },
    Latitude : {
        type : Number
    },
    Logitude : {
        type : Number
    },
    decibel : {
        type : Number
    },
    lastupdate : {
        type : String
    }
})

var UserSchema = new mongoose.Schema({
    username : {
        type : String
    },
    id : {
        type : String
    },
    password : {
        type : String
    }
})

var User = mongoose.model('user',UserSchema)
var Place = mongoose.model('place', PlaceSchema)

exports.User = User
exports.Place = Place
exports.db = db
