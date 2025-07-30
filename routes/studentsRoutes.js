const express=require('express');
const studentController=require('../controller/studentController')
const router=express.Router();

router.get("/",studentController.getAllStudents);
router.post("/",studentController.addEntries);
router.get("/:id",studentController.getStudentById);
router.put('/:id',studentController.updateEntry);
router.delete('/:id',studentController.deleteEntry);

module.exports=router;