const Emitter = require('./emitter');
const EmitterFromNode = require('events');

console.log('Our emitter:');

demoEmitter(new Emitter());

console.log('Node emitter:');

demoEmitter(new EmitterFromNode());

function demoEmitter(emitter) {
    emitter.on('greet', () => {
        console.log('Somewhere a hello has been said');
    });

    emitter.emit('greet');
}