const mongoose = require('mongose');

const WarehouseSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        min:5,
        max:7,
        unique:true
    },
    products:{
        type:Array
    },

});