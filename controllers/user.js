const path = require('path');
const sequelize = require('../utils/db-connection');
const User = require('../models/user');
const{sendResponse,sendErrorResponse}=require('../utils/response');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return sendResponse(res,200,users)
        // res.status(200).json(users );
    } catch (error) {
        console.log(error);
        return sendErrorResponse(res,500,"Internal server error");
        // res.status(500).json( error )
    }
}

const addNewUser = async (req, res) => {
    try {
        const {name,email,phone}=req.body;
        const user=await User.create({name,email,phone});
        return sendResponse(res,201,user);
        // res.status(201).json(user);
    } catch (error) {
        console.log(error);
        return sendErrorResponse(res,500,"Internal server error");
        // res.status(500).json( error )
    }
}

const editUser = async (req, res) => {
    try {
        const id=req.params.id;
        const {name,email,phone}=req.body;
        const user=await User.findByPk(id);
        if(!user){
            return sendErrorResponse(res,404,"User not found");
            // res.status(404).json('User not found');
        }
        user.name=name;
        user.email=email;
        user.phone=phone;
        await user.save();
        return sendResponse(res,200,user);
        // res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return sendErrorResponse(res,500,"Internal server error");
        // res.status(500).json(error )
    }
}

const deleteUser = async (req, res) => {
    try {
        const id=req.params.id;
        const user=await User.destroy({where:{id}});
        if(!user){
            return sendErrorResponse(res,404,"User not found");
            // res.status(404).json('User not found');
        }
        return sendResponse(res,200,user)
        // res.status(200).json("user is deleted");
    } catch (error) {
        console.log(error);
        return sendErrorResponse(res,500,"Internal server error");
        // res.status(500).json( error )
    }
}

module.exports = {
    getAllUsers,
    addNewUser,
    editUser,
    deleteUser
}