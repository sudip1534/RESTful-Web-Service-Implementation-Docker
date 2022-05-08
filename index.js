const express=require('express');
const app=express();

const port=process.env.PORT || 3001;

app.get('/',(req,res)=>{
res.send('hello world');
});

//import customer route

const customer_Routes=require('./src/routes/customer_route');

//create customer route
app.use('/api/customers',customer_Routes); 

app.listen(port,()=>{
console.log(`Express server is running on port ${port}`);
});
