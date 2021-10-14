// index.js is a good thing to use for code structuring. In terms of Java, you could think of it as greet being the class
// and anything inside of index.js being a public method, while everything else is private.
const greetEnglish = require('./english');
const greetSpanish = require('./spanish');

module.exports = {
    english: greetEnglish,
    spanish: greetSpanish
}