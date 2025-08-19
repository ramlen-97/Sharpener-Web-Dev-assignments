const express = require('express');
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');
const courseRoutes=require('./routes/courseRoutes');

//Models
require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/students', studentRoutes);
app.use('/courses',courseRoutes);


db.sync().then(() => {
    app.listen(3000, (err) => {
        console.log("Server is running");
    })
}).catch((err) => {
    console.log(err);
})


