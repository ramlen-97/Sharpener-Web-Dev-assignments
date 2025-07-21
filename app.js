const express=require('express');
const app=express();


app.get("/products",(req,res,next)=>{
    res.send("Here is the list of all products")
})

app.post("/products",(req,res,next)=>{
    res.send("A new product has been added");
})

app.get("/categories",(req,res,next)=>{
    res.send("Here is the list of all categories")
})

app.post("/categories",(req,res,next)=>{
    res.send("A new category has been created");
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page not found</h1>`)
})

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
})