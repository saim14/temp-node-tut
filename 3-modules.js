// Modules
// import names from './name'
const names = require('./4-name')
const utils = require('./5-utils')

const data = require('./6-alternative-flavor')

console.log(names)
console.log(`Names [${names.saim}, ${names.siam}] are coming from name module`)
console.log(utils.sayHello(names.saim))

console.log(data)
console.log(data.items)
console.log(data.singlePerson.name)
console.log()
require('./7-mind-grenade') // it will run directly the entire file, whatever there is

