// A path to one of your own files always starts with a dot or a slash
// http is needed to create a server
const http = require('http');
// File system API
// You generally name the variable name the same as the library name
const fs = require('fs');

const server = http.createServer(
    requestListener // Request listener is a function that will execute for every incoming request
);

// Keep the server running to listen for activities
server.listen(3030);

function requestListener(
    request, // Represents the incoming request, and allows us to read data from it
    response // Object that we can use to return a response to whoever has sent the request
) {
    const url = request.url;
    const method = request.method;

    if (url === '') {
        // The return is not needed, but it's good to make sure no additional code will be written.
        return firstResponse(response);
    }

    if (url === '/message' && method === 'POST') {
        return handleMessage(request, response);
    }
}

function firstResponse(response) {
    response.setHeader('Content-Type', 'text/html');
    response.write(
        ```
        <html>
            <head>My First Page</head>
            <body>
                <h1>Hello from the server!</h1>
                <form action="/message" method="POST" name="firstSentData">
                    <input type="text" />
                    <button type="submit">
                        Send
                    </button>
                </form>
            </body>
        </html>
        ```
    );
    // The return is not needed, but it's good to make sure no additional code will be written.
    return response.end(); // Cannot add anything more after end is called
}

function handleMessage(request, response) {
    const body = [];
    // We declare a function for every incoming data piece, so a buffer
    // Here we are simply declaring listeners. The actual processing is async
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    // Execute a function once the reading of the data has finished
    // Here we are simply declaring listeners. The actual processing is async
    request.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        // Looks like message=some text
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
    });
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
}