const sequelize = require('../utils/db-connection');
const Buses = require('../models/buses');
const { Op } = require("sequelize");

const getBuses = async(req, res) => {
    try {
        const {seats}=req.params;
        const availableBuses=await Buses.findAll({where:{availableSeats:{[Op.gt]:seats}}});
        // console.log(availableBuses);
        res.status(200).send({availableBuses});
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to get the buses");
    }
}

const addNewBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        const bus = await Buses.create({ busNumber, totalSeats, availableSeats });
        res.status(201).send(`Bus with bus number :${busNumber} has been successfully added`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to add the bus");
    }

}


module.exports = {
    getBuses,
    addNewBus
}