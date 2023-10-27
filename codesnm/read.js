const    {readFile ,writeFile} =  require('fs')
readFile('./file.txt',(eer,result)=>{
    if (err) {
        console.log(eer)
        return
    }
    console.log(result)
})