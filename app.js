const express=require('express');
const app=express();

const categoryRouter=require('./routes/categories');
const productRouter=require('./routes/products');
const bookRouter=require('./routes/books');

app.use(express.json());

app.use('/categories',categoryRouter);
app.use('/products',productRouter);
app.use('/books',bookRouter);

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page not found</h1>`)
})

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
})