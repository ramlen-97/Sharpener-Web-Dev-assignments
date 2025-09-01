const express=require('express');
const inventoryController=require('../controllers/inventory');

const router=express.Router();


router.get('/home',inventoryController.getHomepage);

router.get('/inventory',inventoryController.getAllInventory);

router.post('/inventory',inventoryController.addInventoryItem);

router.put('/inventory/:id',inventoryController.editInventoryItem);

router.delete('/inventory/:id',inventoryController.deleteInventoryItem);

module.exports=router;