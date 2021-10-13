<h1>NodeJS Tutorial</h1>

NodeJS is a JS runtime.  Allows running Javascript outside the browser. NodeJS uses V8. It also adds
additional features. One of these features is access to the file system API.

You can enter a Node REPL environment by writing `node` into the command line.

Can run your own files with `node <file-name>`.

The main file is often named `app.js` or `server.js`.

`server.listen()` enters an event loop. The event loop continues existing until an exit occurs by a 
hard exit or some other method. `process.exit()` can be used to exit the event loop, but you wouldn't 
really call it from your code.

The incoming data is sent as a stream of data. A stream is an on-going process. The data is read in 
chunks. We can start working on the data before all of it has been read. You can use a
buffer to read that data. A buffer is like a bus stop. It takes a couple of chunks and
releases them after it is done. You work with the buffer.