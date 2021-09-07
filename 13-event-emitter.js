const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved with user: ${name} and id: ${id}`)
})
customEmitter.on('response2', () => {
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34)
customEmitter.emit('response2')