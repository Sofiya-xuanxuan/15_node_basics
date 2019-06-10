(new Promise(resolve=>{
    console.log('resolve');
    resolve();
})).then(()=>console.log('promise then') );

setImmediate(()=>{
    console.log('setImmediate');
});

setTimeout(()=>{
    console.log('setTimeout');
},0);

process.nextTick(()=>{
    console.log('nextTick');
});

//打印顺序
//resolve
// nextTick
// promise then
// setTimeout
// setImmediate