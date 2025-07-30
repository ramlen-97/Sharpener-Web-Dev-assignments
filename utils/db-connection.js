const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('testdb','root','Ramlen@97',{
    host:'localhost',
    dialect:'mysql'
});


(async()=>{
     try {
    
    await sequelize.authenticate();
    console.log("Connection to the database has been created");

} catch (error) {
    console.log(error);
}})();



module.exports=sequelize;
























// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Ramlen@97',
//     database: 'studentmanagement'
// })

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Connection has been created");

//     const creationQuery = `create table IF NOT EXISTS Students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(225),
//         email VARCHAR(255),
//         age INT
//     )`

//     connection.execute(creationQuery, (err) => {
//         if (err) {
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("Table is created");
//     })

// })

// module.exports=connection;