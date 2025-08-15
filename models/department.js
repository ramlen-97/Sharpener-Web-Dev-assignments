const sequelize=require('../utils/db-connection');
const{Sequelize,DataTypes}=require('sequelize');

const Department=sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})

module.exports=Department;