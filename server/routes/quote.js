var express = require('express');
var router = express.Router();

var quotes_data = require('../modules/quotes-data.js');


var routeCounter = 0;

router.get('/random', function(req, res){
    routeCounter++
    console.log('This route has been hit', routeCounter, 'times')
    var randomNumber = Math.floor(Math.random()*4);
    res.send(quotes_data[randomNumber]);
    // res.sendStatus(500);
});

router.get('/first', function(req, res){
    res.send(quotes_data[0]);
})

router.get('/', function(req, res){
    res.send('you can find quotes on /quote/random or /quote/first');
});

router.get('/all', function(req, res){
    res.send(quotes_data);
});

router.post('/new', function(req, res){
    console.log('taco');
    console.log('req.body in new quote post', req.body);
    quotes_data.push({quote: req.body.quote_to_add});
    res.sendStatus(200);
});

module.exports = router;