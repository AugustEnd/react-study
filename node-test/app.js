const http = require('http');
const pid = process.pid;
http.createServer((req,res)=>{
    for(let i = 1e7;i>0;i--){
    }
    console.log(`handling request from ${pid}`);
    res.end(`hello from ${pid} \n`)
}).listen(8080,()=>{
    console.log(`started ${pid}`);
})

setTimeout(()=>{
    throw new Error('Ooops');
},10000*Math.random())