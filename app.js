const http=require("http")
const server=http.createServer((req,res)=>{
    console.log("hello")
    res.end("welcome sathish")
})
server.listen(3000)