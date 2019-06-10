const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //解构
    const {url,method,headers}=req;
    if(url=='/'&&method=='GET'){
        fs.readFile('index.html',(err,data)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    }else if(url=='/users'&&method=='GET') {
        //模拟ajax请求
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify([{name:'abc'}]));
    }else if(method==='GET' && headers.accept.indexOf('image/*')!==-1) {
        fs.createReadStream('.'+url).pipe(res);
    }else {

    }
});

server.listen(3000);
