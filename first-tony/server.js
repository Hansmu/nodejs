const greet = require('./greet');
const http = require('http');
const fs = require('fs');

greet.english();
greet.spanish();

console.log('----------------------------------------------');

require('./import-examples');

console.log('----------------------------------------------');

require('./event-emitter-demo');

console.log('----------------------------------------------');

require('./buffer-examples');

// The same event listener patter happens here. We pass a callback and whenever an event is emitted, then this callback
// is called.
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Node core doesn't have methods to deal with templates
    const html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    const message = 'Hello world';
    res.end(html.replace('{ Message }', message));
});

server.listen(1337);