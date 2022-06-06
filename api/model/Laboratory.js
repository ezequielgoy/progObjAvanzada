const mongoose = require('mongoose');
const Extract = require('./Extract');
const router = require("express").Router();
const Product = require("./Product");


const LaboratorySchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        unique:true
    },
    Extraction:{
        type: Array,
        default:[Extract]
    } ,
    Reports:{
        type: Array,
        default:[Report]
    }

});

const Laboratory = mongoose.model('Laboratory', LaboratorySchema);

module.exports = Laboratory;
