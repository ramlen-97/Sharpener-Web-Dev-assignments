const express=require('express');
const router=express.Router();
const busController=require('../controller/buses');

router.get('/available/:seats',busController.getBuses);
router.post('/',busController.addNewBus);

module.exports=router;