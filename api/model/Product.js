
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true,
        min:2,
        max:7,
        unique:true,
        immutable:true
    },
    description:{
        type:String,
        require: true,
        min:4,
        immutable:true
    },
    critic:{
        type:Boolean,
        require: true,
        immutable:true
    }

});

const Product = mongoose.model('Product', ProductSchema);

module.exports=Product;