const http=require("http")
const fs=require("fs");
const server=http.createServer((req,res)=>{
   
    const url=req.url;
    const method=req.method;
    if(url==="/"){
        fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err)
            }
        res.write('<html>')
        res.write('<head><title>enter</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><Form action=/message method=POST><input type="text" name="message"></input><button type=submit>send</button></Form></body>')
        res.write('</html>')
        console.log("hello")
        return res.end()

        })
        
    }
    if(url==="/message"&&method==="POST"){
        const body=[]
        req.on("data",(chunck)=>{
            body.push(chunck)
        })
         return req.on('end',()=>{
            const pharseBody=Buffer.concat(body).toString()
            const message=pharseBody.split("=")[1]
            fs.writeFileSync('message.txt',message,()=>{
                res.statusCode=302;
                res.setHeader('Location','/')
             return res.end()
            })
            console.log(pharseBody)
        })
      
        
    }
  
        
    
   
})
server.listen(4000)