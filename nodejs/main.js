const http=require("http");
// const url=require("url");
// const { json } = require("stream/consumers");
// const server=http.createServer((req,res)=>{
//     res.write("E chadavatalu passavatalu mana valla kadhura physicalgani mentalgani strainuu");
//     res.end()
// });

// // let obj={name:"syam",city:"Amp"};
// const server=http.createServer((req,res)=>{
// //     res.writeHead(201,"hello Syam",{"content-type":"application/json"});
// //     res.write(JSON.stringify(obj));
// //     res.end();
// // });

const server=http.createServer((req,res)=>{
    // const parsedURL=url.parse(req.url,true)
    // console.log(parsedURL)
    if(req.method=="GET"){
        if(req.url=="/CHAAVA"){
            res.writeHead(200,"ok",{"content-type":"application/json"});
            res.write(JSON.stringify({"movie name":"CHAAVA",screen:"one"}))
            res.end();
        }else if(req.url=="/THANDEL"){
            res.writeHead(200,"ok",{"content-type":"application/json"});
            res.write(JSON.stringify({"movie name":"THANDEL",screen:"one"}))
            res.end();
        }else if(req.url=="/SKYFORCE"){
            res.writeHead(200,"ok",{"content-type":"application/json"});
            res.write(JSON.stringify({"movie name":"SKYFORCE",screen:"one"}))
            res.end();
        }else{
                res.writeHead(200,"ok",{"content-type":"application/json"});
                res.write(JSON.stringify({message:"movie not found"}))
                res.end();
            }
        
    }
    else if(req.method=="POST"){
        res.end()
    }
    else if(req.method=="PUT"){
        res.end()
    }
    else if(req.method=="DeLETE"){
        res.end()
    }
    else{
        res.end()
    }
})
server.listen("3110",()=>{console.log("server running")})

