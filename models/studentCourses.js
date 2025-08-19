const sequelize=require('../utils/db-connection');
const {DataTypes}=require('sequelize');

const StudentCourses=sequelize.define('studentCourses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

module.exports=StudentCourses;