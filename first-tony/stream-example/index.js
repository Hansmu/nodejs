const fs = require('fs');
const zlib = require('zlib');

// Encoding so that it'd know what to translate our binary data into.
// highWaterMark to define the size of the buffer
const readable = fs.createReadStream(__dirname + '/greet-large.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/greet-large-copy.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

// Since it extends EventEmitter, then we can use on and emit.
// What happens is that the stream will fill a buffer. If the file is small enough, then one buffer can take in the
// entire file, but if it's large enough, then the buffer will take in pieces of the file at a time.
readable.on('data', (chunk) => {
    console.log(chunk.length);
    writable.write(chunk);
});

// The simpler and faster method using pipes.
// While our example has files, then streaming doesn't have to be limited to files. We can stream any kind of data.
const readablePiping = fs.createReadStream(__dirname + '/greet-large.txt');
const writablePiping = fs.createWriteStream(__dirname + '/greet-large-copy-piping.txt');
// The pipe method returns the stream that you are piping into. So if you wanted to chain that additionally, you could call
// another .pipe on it. In this case, perhaps a duplex stream.
readablePiping.pipe(writablePiping);

const readableCompressing = fs.createReadStream(__dirname + '/greet-large.txt');
const compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Creates a transform stream, both readable and writable. Every time a chunk is sent to it, it compresses that chunk
// more or less.
const gzip = zlib.createGzip();
readableCompressing // stream -> stream -> stream
    .pipe(gzip) // Every chunk will be piped to gzip, which compresses the chunk.
    .pipe(compressed); // Each compressed chunk will be streamed into the compressed stream.