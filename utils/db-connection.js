const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('shop-inventory','root','Ramlen@97',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connection to db has been created");
    } catch (error) {
        console.log(error);
    }
})();

module.exports=sequelize;