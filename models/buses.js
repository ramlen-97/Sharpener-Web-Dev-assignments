const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');
const { type } = require('os');

const Buses=sequelize.define('Buses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports=Buses;