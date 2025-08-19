const sequelize = require('../utils/db-connection');
const Users = require('../models/users');
const Bookings=require('../models/bookings');
const Bus=require('../models/buses');

const getAllUsers = async(req, res) => {
    try {
        const users=await Users.findAll();
        // console.log(users);
        res.status(200).send({users});
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to get the users");
    }
}

const addNewUser = async(req, res) => {
    try {
        const {name,email}=req.body;
        const user=await Users.create({name,email});
        res.status(201).send(`User with name : ${name} is successfully created!`)
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to add user");
    }
}

const getUserBookings=async(req,res)=>{
    try {
        const {id}=req.params;
        const user=await Bookings.findAll({where:{UserId:id},include:Bus});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({'error':error.message})
    }
}


module.exports = {
    getAllUsers,
    addNewUser,
    getUserBookings
}