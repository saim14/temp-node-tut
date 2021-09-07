const {readFileSync, writeFileSync} = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first)
console.log(second)
console.log('Done with the first task')
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second} \n`,
    { flag: 'a' }
    )
console.log('Done with the second task')

console.log('Starting new task')