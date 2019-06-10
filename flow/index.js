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
});

// Log.....callback 1560162255883
// Log.....promise 1560162255893
// Log.....Generator 1560162255895
// Log.....CO 1560162255896
// Log.....Async/await 1560162255897
// Log.....callback2 1560162256891
// Log.....promise2 1560162256899
// Log.....Generator 1560162256900
// Log.....CO 1560162256901
// Log.....Async/await 1560162256902
// Log.....promise3 1560162257903