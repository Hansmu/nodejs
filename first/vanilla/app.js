// A path to one of your own files always starts with a dot or a slash
// http is needed to create a server
const http = require('http');
// File system API
// You generally name the variable name the same as the library name
const requestHandler = require("./routes");

const server = http.createServer(
    requestListener // Request listener is a function that will execute for every incoming request
);

// Keep the server running to listen for activities
server.listen(3030);

function requestListener(
    request, // Represents the incoming request, and allows us to read data from it
    response // Object that we can use to return a response to whoever has sent the request
) {
    requestHandler(request, response);
}

