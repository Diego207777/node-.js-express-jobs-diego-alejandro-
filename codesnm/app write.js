const {readFileSync , writeFileSync } = require('fs')
const first =  readFileSync('./file.txt','utf8')

writeFileSync('./home/okasamiboku/codesnm/hacker.txt','hwllo diego alejandro${first } ',first)
console.log(first)

