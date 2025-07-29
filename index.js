const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ramlen@97',
    database: 'busbookingsystem'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const creationQuery = [
        `create table Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(225),
        email VARCHAR(255)
    )`,
        `create table Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT,
        totalSeats INT,
        availableSeats INT
    )`,
        `create table Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`,
        `create table Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus VARCHAR(255)
    )`

    ]
    for(let statement of creationQuery){

        connection.execute(statement, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }
        // console.log("Table is created");
    })
    }
    
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3000, (err) => {
    console.log("Server is running");
})