const mongoose = require('mongoose');
const router = require("express").Router();
const Product = require("./Product");
const Warehouse = require("./Warehouse");

const StockSchema = new mongoose.Schema({
    warehouse:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    quantity:{
        type: Number,
        default: 0,
        required: true,
        max: 200
    }
})

const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;