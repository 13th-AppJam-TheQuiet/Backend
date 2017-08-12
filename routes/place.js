module.exports = place

function place(app, db, randomstring, moment) {
    app.post('/place/setting', (req, res)=>{
        var place = new db.Place({
            placeid : req.param('placeid'),
            placename : req.param('placename'),
            Latitude : req.param('Latitude'),
            Logitude : req.param('Logitude'),
            decibel : 0,
            lastupdate: "없음"
        })
        place.save((err)=>{
            if(err){
                console.log('/place/setting save Error')
                res.send(403, {
                    success : false,
                    message : '/place/setting save Error'
                })
                throw err
            }
            else {
                console.log('Place Save Error')
                res.send(200,{
                    message : 'Place Setting Success',
                    success : true
                })
            }
        })
    })

    app.post('/place/update', (req, res)=>{
        var time = moment().format('YYYY년 MM월 DD일 A h시mm분');
        db.Place.update({
            placeid : req.param('placeid')
        },{$set:{decibel : req.param('decibel'), lastupdate : time }},(err)=>{
            if(err){
                console.log('/place/update update Error')
                throw err
            }
            else{
                db.Place.findOne({
                    placeid : req.param('placeid')
                },(err, result)=>{
                    if(err){
                        console.log('/place/update PlaceFind Error')
                        res.send(403, {
                            success : false,
                            message : '/place/update PlaceFind Error'
                        })
                    }
                    else if(result){
                        console.log(result.placename+' Place Update')
                        res.send(200,{
                            success : true,
                            message : result.placename+' Place Update'
                        })
                    }
                })
            }

        })
    })

    app.post('/place/main', (req, res)=>{
        db.Place.find({},(err, result)=>{
            if(err){
                console.log('/place/main placefind Error')
                throw err
            }
            else if(result[0]!=undefined){
                console.log('Main Success')
                res.send(200, result)
            }
            else if(result[0]==undefined){
                console.log('Main Error')
                res.send(404, {
                    success : false,
                    message : "Data Not Founded"
                })
            }
        })
    })
}