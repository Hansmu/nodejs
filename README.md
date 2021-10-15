<h1>NodeJS Tutorial</h1>

Node is written in C++. V8 is written in C++. V8 is embedded into Node.js. There are hooks that can be
used to add features into Javascript inside of V8. You add a definition into the V8 C++ code and it
becomes available in Javascript. Or rather, the call that you have in Javascript will have a definition
in the compiling C++ code.

Ecmascript is a language specification, while JS is the implementation. V8 makes sure the JS compiled 
machine code works according to specification. V8 is a Javascript engine. A Javascript engine is a 
program that converts Javascript code into something the computer processor can understand. And it 
should follow the ECMAScript standard on how the language should work and what features it should have.

What does Javascript need to manage a server?
* Better ways to organize our code into reusable parts
* Ways to deal with files
* Ways to deal with databases
* The ability to communicate over the Internet
* The ability to accept requests and send responses
* A way to deal with work that takes a long time

The above problems are issues that Javascript doesn't solve. At least not in vanilla. Node, however, does.

Node comes with a lot of utility JS files that are mainly wrappers for C++ code. Some are pure JS.

You can enter a Node REPL environment by writing `node` into the command line.

Can run your own files with `node <file-name>`.

The main file is often named `app.js` or `server.js`.

CommonJS modules are an agreed upon standard for how code modules should be structured.

Each time you `require` a module, it's being run through Node, as you'd expect. What it does,
however, is add additional features to it. It creates a wrapper around the code that
you've written and adds additional properties to the code that you can access. It adds
`exports`, `require`, `module`, `__filename`, `__dirname`. At the end of the module
execution `module.exports` is returned.

The actual code looks like this.

```
...

(function (exports, require, module, __filename, __dirname) {
    function greet() {
        console.log('Hello');
    }
    
    module.exports = greet;
});

...

fn (module.exports, require, module, filename, dirname);

...

return module.exports; 

```

`exports` is the same object as `module.exports`. However, the same export patterns do not work with
`exports` as it does with `module.exports`. You can easily see the problem when looking at the code
pattern of how our code is being wrapped in the above code section. If you do `exports = ...` then it
won't work, because you're changing the object value inside a function and that doesn't work. It's just
better to use `module.exports` instead of `exports` to avoid potential pitfalls.

Event - something that has happened in our app that we can respond to. In Node we actually talk about two
different kinds of events. One of the events come from system events. These are coming from the Node C++
Core from libuv. E.g. I finished reading a file. Things that Javascript doesn't have. The second set of
events are the custom events that are coming from the Javascript core. This is coming from an Event Emitter.
So C++ libuv and JS Core event emitter are the two event types. A lot of the times JS wraps libuv. 

However, JS doesn't actually have the concept of events, though, so the library's faking events. The inner
structure of these is like the code in our `emitter.js`. The actual code is a lot more complex and safer,
though.


`server.listen()` enters an event loop. The event loop continues existing until an exit occurs by a 
hard exit or some other method. `process.exit()` can be used to exit the event loop, but you wouldn't 
really call it from your code.

The incoming data is sent as a stream of data. A stream is an on-going process. The data is read in 
chunks. We can start working on the data before all of it has been read. You can use a
buffer to read that data. A buffer is like a bus stop. It takes a couple of chunks and
releases them after it is done. You work with the buffer.