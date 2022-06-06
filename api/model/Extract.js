const mongoose = require('mongoose');
const router = require("express").Router();
const { timeStamp } = require('console');

const ExtractSchema = new mongoose.Schema({
    product:{
        type:Array
    },
    lab:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        default: Date.prototype.getUTCDate
    }
});

const Extract = mongoose.model('Extract', ExtractSchema);

module.exports = Extract;