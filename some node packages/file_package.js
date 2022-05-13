const {readFile, writeFile} = require('fs')

console.log('start')
readFile(
    './files/frist.txt',
    'utf8',
    (err, result) =>{
        if(err) {
            console.log(err)
            return
        }
        const first = result
        readFile(
            './files/second.txt',
            'utf8',
            (err, result) =>{
                if(err){
                    console.log(err)
                    return
                }
                const second = result
                writeFile(
                    './files/result.txt',
                    'utf8',
                    (err, result)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log("done successfully")
                    }
                )
            }
        )
    }
)
console.log("starting now tast")