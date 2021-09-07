// local, because I am not exporting it
const Variab = "I am talking from module file"

// Global, because I am exporting it
const sayHello = (name) => {
    console.log(`Hello ${name}, I am from module`)
}

module.exports = {sayHello}