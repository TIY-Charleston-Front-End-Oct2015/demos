var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/app"))

app.get('/', function(req,response) {
  response.sendFile('app');
});

app.get('/maybe', function(req,res) {
  res.send("<p>what am i doing</p>");
});


http.listen(port);


// io.on('connection', function(socket) {
//   console.log("SOMEONE NEW JOINED US");

//   socket.on('new chat', function(val) {
//     console.log(val);
//     io.emit('new chat', val);
//   })
// })

console.log('WE ARE RUNNING ON PORT:' + port);
