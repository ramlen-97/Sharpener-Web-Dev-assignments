const express=require('express');
const bookingController=require('../controller/bookings');

const router=express.Router();

router.post('/',bookingController.addbooking);


module.exports=router;