const sequelize = require('../utils/db-connection');
const Users = require('../models/users');

const getAllUsers = async(req, res) => {
    try {
        const users=await Users.findAll();
        // console.log(users);
        res.status(200).send({users});
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to get the users");
    }
}

const addNewUser = async(req, res) => {
    try {
        const {name,email}=req.body;
        const user=await Users.create({name,email});
        res.status(201).send(`User with name : ${name} is successfully created!`)
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to add user");
    }
}

module.exports = {
    getAllUsers,
    addNewUser
}