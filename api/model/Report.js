const mongoose =require("mongoose");
const router = require("express").Router();

const ReportSchema = new mongoose.Schema({
    product:{
        type:Array
    },
    usage:{
        type:String,
        require:true
    }

})


const Report = mongoose.model('Report', ReportSchema);

modules.exports = Report;