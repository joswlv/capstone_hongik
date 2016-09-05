var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
//define scheme
var userSchema = mongoose.Schema({
    userid: String,
    sex : String,
    city : String
});

// create model with mongodb collection & scheme
var User = mongoose.model('users',userSchema);
router.post('/insert', function(req, res, next) {
    var userid = req.body.userid;
    var sex = req.body.sex;
    var city = req.body.city;

    var user = new User({'userid':userid,'sex':sex,'city':city});
    user.save(function(err,silence){
        if(err){
            console.log(err);
            res.status(500).send('update error');
            return;
        }
        res.status(200).send("Inserted");

    });
});
router.post('/update', function(req, res, next) {
    var userid = req.body.userid;
    var sex = req.body.sex;
    var city = req.body.city;
    User.findOne({'userid':userid},function(err,user){

        if(err){
            console.log(err);
            res.status(500).send('update error');
            return;
        }
        user.sex = sex;
        user.city = city;
        user.save(function(err,silence){
            if(err){
                console.log(err);
                res.status(500).send('update error');
                return;
            }
            res.status(200).send("Updated");

        });
    });
});

router.get('/list', function(req, res, next) {
    User.find({},function(err,docs){
        if(err) console.log('err');
        res.send(docs);
    });
});
router.get('/get', function(req, res, next) {
    db = req.db;
    var userid = req.query.userid
    User.findOne({'userid':userid},function(err,doc){
        if(err) console.log('err');
        res.send(doc);
    });
});

module.exports = router;