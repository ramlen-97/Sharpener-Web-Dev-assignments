const express=require('express');
const app=express();

app.get("/orders",(req,res,next)=>{
    res.send("Here is the list of all orders")
})

app.post("/orders",(req,res,next)=>{
    res.send("A new order has been created");
})

app.get("/users",(req,res,next)=>{
    res.send("Here is the list of all users")
})

app.post("/users",(req,res,next)=>{
    res.send("A new user has been added");
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})