readFile('./pou.txt','utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./pou.txt','utf8',(err,result)=> {
        if (err) {
            console.log(err)
            return
        }
        const first = result
    })
})

// 