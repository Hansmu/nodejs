// Have to specify either size or data
const buffer = new Buffer('Hello', 'utf8');

// The buffer contains our data in binary. String => unicode => binary
console.log(buffer);
console.log(buffer.toString());

// A buffer is of finite length. If I write to it, then it'll overwrite what's in it.
buffer.write('wo');
console.log(buffer.toString())

const fs = require('fs');
// It will look at the binary data and decide what it'll wrap to in terms of its character encoding.
// When the contents of our file is read, it first loads it into the buffer and uses the encoding so we could get the
// string back.
// In terms of the method to use, then readFileSync should be avoided as it's sync, so blocking. If there are a whole
// bunch of users trying to access the server, then they'll be blocked until the file is read. If the file is large, we'd
// end up with a large buffer and the reading can take a long time.
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// Returns undefined, runs asynchronously. Should always lean towards async methods whenever possible.
// We have a problem here with the buffer. The buffer sits on the heap. If the file is very large and many people are
// running this program. You'll end up with many buffers that are very large in size, using a lot of memory. We need to
// minimize the amount of data we are working with inside the buffer at any one time.
const greetTwo = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data, ' - two');
});

console.log('Done', greetTwo)