module.exports = auth

function auth(app, db) {
    app.post('/auth/register', (req, res)=>{
        var username = req.param('username')
        var id = req.param('id')
        var password = req.param('password

        var user = new db.User({
            username : username,
            id : id,
            password : password
        })

        db.User.findOne({
            id : id
        }, (err, result)=>{
            if(err){
                console.log('/auth/register UserFind Error')
                res.status(403).send('/auth/register UserFind Error')
                throw err
            }
            else if(result){
                console.log('Already In Service : '+username)
                res.send({
                    message : 'Already In Service',
                    success : false
                })
            }
            else {
                user.save((err)=>{
                    if(err){
                        console.log('User Register Error')
                        throw err
                    }
                    else {
                        console.log(username+' Register Success')
                        res.send({
                            message : 'User Register Success',
                            success : true
                        })
                    }
                })
            }
        })
    })

    app.post('/auth/login', (req, res)=>{
        var id = req.param('id')
        var password = req.param('password')

        db.User.findOne({
            id : id
        }, (err, result)=>{
            if(err){
                console.log('/auth/login UserFind Error')
                throw err
            }
            else if(result){
                if(result.password == password){
                    console.log('User Login : '+result.username)
                    res.send(200,result)
                }
                else if(result.password != password){
                    console.log('User Login Fail : '+result.username)
                    res.send({
                        success : false,
                        message : 'Password Error'
                    })
                }
            }
            else {
                console.log('User Not Founded')
                res.send(404,{
                    success : false,
                    message : 'User Not Founded'
                })
            }
        })
    })
}
