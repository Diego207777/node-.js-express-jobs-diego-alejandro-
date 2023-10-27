const {readFileSync , writeFileSync } = require('fs')
const first =  readFileSync('./file.txt','utf8')

console.log(first)
