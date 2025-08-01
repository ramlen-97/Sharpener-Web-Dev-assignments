const express = require('express');
const app = express();
const db = require('./utils/db-connection');

const userRoutes=require('./routes/users');
const busRoutes=require('./routes/buses');

app.use(express.json());

app.use('/users',userRoutes);
app.use('/buses',busRoutes);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server is running");
    })
}).catch((error) => {
    console.log(error);
})
