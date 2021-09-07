const { readFile, writeFile } = require('fs')

console.log('Start')
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return 
        }
        const second = result;
        console.log('Done with the first task')
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second} `,
            { flag: 'a' }, (err, result) =>{
                if(err){
                    console.log(err)
                    return 
                }
                console.log(result) 
            })
            console.log('Done with the second task')
    })
    
    
})

console.log('Starting next task')

