const express=require('express');
const app=express();

const studentRouter=require('./routes/student');
const courseRouter=require('./routes/course');

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("Welcome message")
    res.send("Welcome to the Student & Course Portal API!");
})

app.use('/students',studentRouter);
app.use('/courses',courseRouter);

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page not found</h1>`)
})

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
})