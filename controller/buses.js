const sequelize = require('../utils/db-connection');
const Buses = require('../models/buses');
const { Op } = require("sequelize");
const Bookings = require('../models/bookings');
const User = require('../models/users');

const getBuses = async (req, res) => {
    try {
        const { seats } = req.params;
        const availableBuses = await Buses.findAll({ where: { availableSeats: { [Op.gt]: seats } } });
        // console.log(availableBuses);
        res.status(200).json({ availableBuses });
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to get the buses");
    }
}

const addNewBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        const bus = await Buses.create({ busNumber, totalSeats, availableSeats });
        res.status(201).json(`Bus with bus number :${busNumber} has been successfully added`);
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to add the bus");
    }
}

const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bus=await Bookings.findAll({where:{BusId:id},include:User});
        res.status(200).json(bus);

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message })
    }
}


module.exports = {
    getBuses,
    addNewBus,
    getBusBookings
}