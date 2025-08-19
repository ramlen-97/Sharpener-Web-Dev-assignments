const express = require('express');
const db = require('./utils/db-connection');

const userRoutes=require('./routes/users');
const busRoutes=require('./routes/buses');
const bookingRoutes=require('./routes/bookings');

require('./models');

const app = express();

app.use(express.json());

app.use('/users',userRoutes);
app.use('/buses',busRoutes);
app.use('/bookings',bookingRoutes);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server is running");
    })
}).catch((error) => {
    console.log(error);
})
