const Sequelize= require('sequelize');

const sequelize=new Sequelize('booking-appointment-app','root','Ramlen@97',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{
    try {
    sequelize.authenticate();
        console.log("Connection to database has been created");
    } catch (error) {
        console.log(error);
    }
})();

module.exports=sequelize;
