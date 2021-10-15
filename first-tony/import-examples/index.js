// In all of the examples you are importing a the exports object. All the import structures depend on the object that
// you are returning with the exports object.
// When you're exporting, then the same exports is being used each time. Modules are cached in Node so each time that
// you're importing, you're getting the same object.
const defaultExported = require('../export-examples/default-export');
const {namedExport} = require('../export-examples/named-export');
const fullObjectExport = require('../export-examples/named-export');
const {greet} = require('../export-examples/replace-object-export');
const fullGreetObject = require('../export-examples/replace-object-export');
const fullGreetObject2 = require('../export-examples/replace-object-export');

defaultExported();
namedExport();
fullObjectExport.namedExport();
greet();
fullGreetObject.greet();

console.log(fullGreetObject === fullGreetObject2);