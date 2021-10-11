// A path to one of your own files always starts with a dot or a slash
const http = require('http');

const server = http.createServer(
    requestListener // Request listener is a function that will execute for every incoming request
);

// Keep the server running to listen for activities
server.listen(3030);

function requestListener(
    request, // Represents the incoming request, and allows us to read data from it
    response // Object that we can use to return a response to whoever has sent the request
) {
    console.log(request);
}