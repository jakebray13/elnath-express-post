var express = require('express'); //whatever exprress has in module.exports
var bodyParser = require('body-parser');
var reallyGreat = require('./routes/really-great');
var index = require('./routes/index');
var quote = require('./routes/quote');
var app = express(); //an instance of an express web app    
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));


console.log('starting up the server');

var routeCounter = 0;

app.get('/index', index); 

app.get('/great', reallyGreat);

app.get('/dinosaur', function(req,res){
    res.send('Roar');
});

app.use('/quote', quote);



app.listen(port, function(){
    console.log('listening on port', port);
});

