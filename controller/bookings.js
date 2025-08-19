const sequelize = require('../utils/db-connection');
const Bookings = require('../models/bookings');

const addbooking=async(req,res)=>{
    try {
        const {userId:UserId,busId:BusId,seatNumber}=req.body;
        const booking=await Bookings.create({UserId,BusId,seatNumber});
        res.status(201).json(booking);
    } catch (error) {
        console.log(error)
        res.status(500).json({'error':error.message});

    }
}

module.exports={
    addbooking
}