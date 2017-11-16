var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){
    console.log('Someone made a request!');
    res.send('this is the catch all');
});

module.exports = router;