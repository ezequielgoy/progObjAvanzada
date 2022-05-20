
const mongoose = require('mongose');

const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        min:5,
        max:7,
        unique:true
    },
    description:{
        type:String,
        require: true,
        min:4
    },
    critico:{
        type:Boolean,
        require: true
    },
    stock:{
        type:Number,
        require: true
    }

});