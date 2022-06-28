const mongoose = require("mongoose");
const router = require("express").Router();

const ReportSchema = new mongoose.Schema({
    product:{
        type:Object
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
    },

})


const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;