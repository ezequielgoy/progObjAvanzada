const mongoose = require('mongoose');
const router = require("express").Router();
const Product = require("./Product");
const WarehouseSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        unique:true
    },
    products:{
        type: Array,
        default: [Product]
    }

});

const Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = Warehouse;
