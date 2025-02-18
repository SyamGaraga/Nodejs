const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("hello");
    res.end("response provided")
});
server.listen("3110",()=>{console.log("server running")})

