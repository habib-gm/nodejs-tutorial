// this is an introduction to module in js
const names = require('./names')
console.log(names)

// destructuring
const {sayHi} = require('./utils')
const {john,peter} = require('./names')

 
sayHi(john)
sayHi(peter)
sayHi(names.john)

