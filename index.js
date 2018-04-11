var express = require('express');
var path = require('path');
// var server = require('http');
const http = require('http');
const https = require('https');
// var server = require('http').createServer(app);
var io = require('socket.io')(http);
// var fs = require('fs');
// var port = process.env.PORT || 3000;
//
// server.listen(port, function () {
//     console.log('Server listening at port %d', port);
// });

console.log("will serve on http port 8000 and https port 443");

let app = express();

// HTTP server
http.createServer(app).listen(8000);

// HTTPS server
// let certificate = fs.readFileSync("./certs/website.crt", 'utf8');
// let chainLines = fs.readFileSync("./certs/intermediate_domain_ca.crt", 'utf8').split("\n");
// let cert = [];
// let ca = [];
// chainLines.forEach(function(line) {
//     cert.push(line);
//     if (line.match(/-END CERTIFICATE-/)) {
//         ca.push(cert.join("\n"));
//         cert = [];
//     }
// });
//
// let httpsOptions = {
//     key: fs.readFileSync('./certs/privatekey.key'),
//     cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };
//
// secServer = https.createServer(httpsOptions, app);
// secServer.listen(8080);

// Routing
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('orientation', function(data){
        socket.emit('orient', data);
    });

    socket.on('geolocation', function(data){
        socket.emit('location', data);
    });

    socket.on('acceleration', function(data){
        socket.emit('motion', data);
    });
});