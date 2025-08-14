const express = require('express');
const app = express();
const db = require('./utils/db-connection');

const userRoutes=require('./routes/user');
const homeRoutes=require('./routes/home');

app.use(express.static('public'));
app.use(express.json());

app.use('/home',homeRoutes);
app.use('/users',userRoutes);

app.use('/', (req, res) => {
    res.status(404).send(`<h1>404 : Page not found</h1>`)
})

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server is running");
    })
}).catch((error) => {
    console.log(error);
})
