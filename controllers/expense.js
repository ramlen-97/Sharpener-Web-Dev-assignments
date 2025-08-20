const Expense = require('../models/expense');
const path=require('path');

const getHomepage=(req,res)=>{
    try {
        res.sendFile(path.join(__dirname,"../views/expense.html"))
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error.message });
    }
}

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error.message });
    }
}

const addExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        const expense = await Expense.create({ amount, description, category });
        res.status(201).json(expense);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error.message });
    }
}

const editExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description, category } = req.body;
        const expense = await Expense.findByPk(id);
        if (!expense) {
            res.status(404).json("Expense not found");
            return;
        }
        expense.amount = amount;
        expense.description = description;
        expense.category = category;
        await expense.save();
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error.message });
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.destroy({where:{id}});
        if (!expense) {
            res.status(404).json("Expense not found");
            return;
        }
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error.message });
    }
}


module.exports = {
    getHomepage,
    getAllExpenses,
    addExpense,
    editExpense,
    deleteExpense
}