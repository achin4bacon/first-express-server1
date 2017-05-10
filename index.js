    ////////////////////////
   ////////////////////////
  ////include express/////
 ////////////////////////
 ////////////////////////
var express = require('express');
var app = express(); 

    ////////////////////////
   ////////////////////////
  //////middleware////////
 ////////////////////////
////////////////////////

//transparent middleware
app.use(function(req, res, next){
    console.log(req.url);
    next(); //takes request and passes it through next layer of middleware
});

//responds to a GET request for the root site
//sends current directory + index.html as root site
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//responds to a GET request with the endpoint /hello
app.get('/hello', function(req, res){
    res.send('hello world');
});

//sets up folder to serve files to the user
app.use(express.static('public'));

  ////////////////
 /////ERRORS/////
////////////////

//404 File Not Found
app.use(function(req, res, next){
    res.status(404);
    res.send('404 File Not Found');
});

//500 Server Error Handler
app.use(function(err, req, res, next){
	console.log(err);
	res.status(500);
	res.send('500 Internal Server Error');
});


    ////////////////////////
   ////////////////////////
  ///////start app////////
 ////////////////////////
////////////////////////

//listin on porta
app.listen(8000, function(){
    console.log('Chu gots a server!');
});