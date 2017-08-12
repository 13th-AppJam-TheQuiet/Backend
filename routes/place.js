module.exports = place

function place(app, db, randomstring) {
    app.post('/place/setting', (req, res)=>{
        var place = new db.Place({
            placeid : randomstring.generate(15),
            placename : req.param('placename'),
            Latitude : req.param('Latitude'),
            Logitude : req.param('Logitude'),
            decibel : 0,
            lastconnect: "없음"
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
        db.Place.update({
            placeid : req.param('placeid')
        },{$set:{decibel : req.param('decibel'), lastconnect : req.param('lastconnect') }},(err)=>{
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
                            message : result.placename+'Place Update'
                        })
                    }
                })
            }

        })
    })
}