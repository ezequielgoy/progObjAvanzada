const mongoose = require('mongoose');
const router = require("express").Router();
const Product = require("./Product");
const Extract = require("./Extract");


const WarehouseSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        unique:true
    },
    warehouseReport:{
        type: Array,
        default:[Extract]
    }

});

const Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = Warehouse;
