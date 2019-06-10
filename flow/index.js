const log=name=>{
    console.log(`Log.....${name} ${new Date().getTime()}`);
}


setTimeout(()=>{
    log('callback');
    setTimeout(()=>{
        log('callback2');
    },1000)
},1000);

const promise=name=>new Promise(resolve => {
    setTimeout(()=>{
        resolve();
        log(name);
    },1000)
});
promise('promise')
.then(()=>promise('promise2'))
.then(()=>promise('promise3'));



const generator=function*(name){
    yield promise(name);
    yield promise(name);
};

const gen=generator('Generator');
gen.next().value.then(()=>{
    gen.next();
});

let co=function(gen,name){
    var it=gen(name);
    var ret=it.next();
    ret.value.then(function(res){
        it.next(res)
    })
};

co(generator,'CO');


setTimeout(async ()=>{
    await promise('Async/await');
    await promise('Async/await');
})