const mongoose = require('mongoose');
const router = require("express").Router();
const { timeStamp } = require('console');

const ExtractSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    lab:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        default: Date.prototype.getUTCDate
    },
    usage:{
        type:String
    }
});

const Extract = mongoose.model('Extract', ExtractSchema);

module.exports = Extract;