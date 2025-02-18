const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("E chadavatalu passavatalu mana valla kadhura physicalgani mentalgani strainuu");
    res.end("response provided")
});
server.listen("3110",()=>{console.log("server running")})

