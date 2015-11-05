/*var http = require('http');

// function that takes 2 parameters - 1) request & 2) response.
http.createServer(function(req,res){
// Response is to write head, STATUS-200, Options: content type of plain text
	res.writeHead(200,{'Content-type':'text/plain'}); 
// Complete response with info sent
	res.end('Hello!');	
// Last, B4 Terminating statement, add a 'listen event', giving PORT & Local Host 
}).listen(1337, '127.0.0.1');
console.log('Webserver has started');*/

var http = require('http');
var fs = require('fs'); // <-- File System Module
http.createServer(function(req,res){
	fs.readFile('index.html', function(err,data){ //Error & Data Parameters
		res.writeHead(200,{'Content-type':'text/html'}); 
		res.end(data);
	});
}).listen(1337, '127.0.0.1');
/* ^ this whole thing is now set to DISPLAY DATA (which is one of the function parameters)
	inside of the file it is reading which is index.html.
*/
console.log('Webserver has started');