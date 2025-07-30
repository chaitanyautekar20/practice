// console.log('Hello world');

var slugify = require('slugify')

let a=slugify('some string')
console.log(a);

// if you pefer something other than '-' as seperator

const b=slugify('satandard $%','_')
console.log(b);

