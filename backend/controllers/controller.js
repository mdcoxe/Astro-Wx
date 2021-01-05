const express = require('express');
const wx = express.Router();
const AstroWx = require('../models/models');

//index
wx.get('/', async (req, res) => {
    try{
        const foundZip = await AstroWx.find({});
        res.status(200).json(foundZip)
    }catch (error) {
        res.status(400).json(error)
    }
});

//delete
wx.delete('/:id', async(req, res) => {
    try {
        const deleteZip = await AstroWx.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteZip)
    } catch (error) {
        res.status(400).json(error)
    }
});

//update
wx.put('/:id', async (req, res) => {
    try {
        const updateZip = await AstroWx.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updateZip);
    } catch (error) {
        res.status(400).json(error);
    }
});


//CREATE
wx.post('/', async (req, res) =>{
    try{
        const createdZip = await AstroWx.create(req.body);
        res.status(200).json(createdZip);
    } catch (error){
        res.status(400).json(error);
    }
})


//show
wx.get('/:id', async (req, res) => {
    try{
        const findZip = await AstroWx.findById(req.params.id);
        res.status(200).json(findZip);
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = wx;