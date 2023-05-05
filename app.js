const http=require("http")
const server=http.createServer((req,res)=>{
   
    const url=req.url;
    if(url==="/"){
        res.write('<html>')
        res.write('<head><title>enter</title></head>')
        res.write('<body><h1>welcome </h1></body>')
        res.write('</html>')
        console.log("hello")
        res.end()
    }
    if(url==="/home"){
        res.write('<html>')
        res.write('<head><title>enter</title></head>')
        res.write('<body><h1>welcome home </h1></body>')
        res.write('</html>')
        console.log("hello")
        res.end()
    }
   
})
server.listen(4000)