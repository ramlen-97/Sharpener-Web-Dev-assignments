const express=require('express');
const router=express.Router();
const userController=require('../controllers/user');


router.get('/',userController.getAllUsers);
router.post('/',userController.addNewUser);
router.put('/:id',userController.editUser);
router.delete('/:id',userController.deleteUser);


module.exports=router;