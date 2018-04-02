var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var controllers = require('./controllers/index.js')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res){
	res.sendFile('views/index.html', { root: __dirname});
})

app.get('/api/animals', controllers.animals.index);

//
app.listen(3000, function(){
	console.log('App running on port 3000');
})