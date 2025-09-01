const express = require('express');
const db = require('./utils/db-connection');
const inventoryRoutes=require('./routes/inventory');

const app = express();

app.use(express.json());
app.use(express.static('public'));


app.use('/shop',inventoryRoutes);

app.use('/',(req,res)=>{
    res.status(404).send(`<h1>Error 404 : Page not found</h1>`);
})

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("server is running");
    })
}).catch((error)=>{
    console.log(error);
})
