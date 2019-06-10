const express=require('./kpress');
const app=express();
app.get('/',(req,res)=>{
    Add();
    res.end('hello world');
});


app.get('/user',(req,res)=>{
    res.end(JSON.stringify([{name:'sofiya',age:18}]))
});

app.listen(3000,()=>{
    console.log('Example app listen at 3000');
})

