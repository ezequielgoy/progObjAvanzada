const mongoose = require('mongose');


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