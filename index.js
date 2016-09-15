var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var firebase = require("firebase");

// Initialize Firebase
var config = {
apiKey: "AIzaSyDYyKejWwPDBG3WuU32DA7Fyj71qWVJMbA",
authDomain: "nonprofit-91165.firebaseapp.com",
databaseURL: "https://nonprofit-91165.firebaseio.com",
storageBucket: "nonprofit-91165.appspot.com",
messagingSenderId: "869188628673"
};
firebase.initializeApp(config);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("connected.");
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});