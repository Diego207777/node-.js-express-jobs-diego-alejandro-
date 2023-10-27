const http =  require('http')
const server =  http.createServer((req,res)=> {
    res.write('welcome to my page  diego alejandro')
    res.end()

})

server.listen(5000)
