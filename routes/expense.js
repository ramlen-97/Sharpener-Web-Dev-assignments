const express=require('express');
const router=express.Router();
const expenseController=require('../controllers/expense');

router.get('/home',expenseController.getHomepage);
router.get('/',expenseController.getAllExpenses);
router.post('/',expenseController.addExpense);
router.put('/:id',expenseController.editExpense);
router.delete('/:id',expenseController.deleteExpense);


module.exports=router;