const express=require('express');
const app=express();


app.get('/welcome/:username',(req,res)=>{
    const username=req.params.username;
    const role=req.query.role;
    res.send(`<h1>Welcome ${username}, your role is ${role}.</h1>`)
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page not found</h1>`)
})

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
})