const fs=require('fs');

//同步读取
//const data=fs.readFileSync('index.js');



//异步读取
// fs.readFile('index.js',(err,data)=>{
//     console.log(data.toString());
// })

//path
const path=require('path');

console.log(path.resolve(__dirname));//表示运行的文件所在的目录
fs.readFile(path.resolve(__dirname,'./index.js'),(err,data)=>{
    console.log(data.toString());
})