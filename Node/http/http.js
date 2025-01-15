//http(hyper text transfer protocol)
const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/plain'},
        res.end('<h1>Hello Nodejs')
    )
})
server.listen(8000,(err)=>{
    if (err) throw err;
    console.log('server is running 8000');

})