const mongoose = require('mongose');
const router = require("express").Router();


const ExtractSchema = new mongoose.Schema({
    product:{
        type:Object,
        require: true,
        min:5,
    },
    lab:{
        type:String,
        require:true,
    }
});

module.exports = router;