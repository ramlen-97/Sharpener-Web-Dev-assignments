const path=require('path');
const Inventory=require('../models/inventory');

const getHomepage=async(req,res)=>{
    try {
        res.sendFile(path.join(__dirname,'../views/shop.html'));
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message });
    }
}

const getAllInventory=async(req,res)=>{
    try {
        const allInventoryItems=await Inventory.findAll();
        res.status(200).json(allInventoryItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message });
    }
}

const addInventoryItem=async(req,res)=>{
    try {
        const inventoryItem=await Inventory.create({...req.body});
        res.status(201).json(inventoryItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message });
    }
}

const editInventoryItem=async(req,res)=>{
    try {
        const id=req.params.id;
        const {buyQty}=req.body;
        const inventoryItem=await Inventory.findByPk(id);
        inventoryItem.quantity=inventoryItem.quantity-buyQty;
        await inventoryItem.save();
        res.status(200).json(inventoryItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message });
    }
}

const deleteInventoryItem=async(req,res)=>{
    try {
        const id=req.params.id;
        const inventoryItem=await Inventory.destroy({where:{id}});
        res.status(200).json(inventoryItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error.message });
    }
}

module.exports={
    getHomepage,
    getAllInventory,
    addInventoryItem,
    editInventoryItem,
    deleteInventoryItem
}