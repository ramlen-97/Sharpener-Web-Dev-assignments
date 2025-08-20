const express=require('express');
const db=require('./utils/db-connection');

const expenseRoutes=require('./routes/expense');

const app=express();

app.use(express.static('public'));
app.use(express.json());

app.use('/expenses',expenseRoutes)

app.use('/', (req, res) => {
    res.status(404).json(`404 : Page not found`)
})

db.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running");
    })
}).catch((error)=>{
    console.log(error);
})