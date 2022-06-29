const mongoose = require("mongoose");
const router = require("express").Router();

const ReportSchema = new mongoose.Schema({
    product:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    warehouse:{
        type:Number,
    },
    lab:{
        type:Number,
    },
    date:{
        type:String,
    },
    usage:{
        type:String,
        default:""
    },

})


const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;