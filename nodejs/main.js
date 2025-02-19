const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.write("E chadavatalu passavatalu mana valla kadhura physicalgani mentalgani strainuu");
//     res.end()
// });
let obj={name:"syam",city:"Amp"};
const server=http.createServer((req,res)=>{
    res.writeHead(201,"hello Syam",{"content-type":"application/json"});
    res.write(JSON.stringify(obj));
    res.end();
});
server.listen("3110",()=>{console.log("server running")})

