const router = require("express").Router();
const User = require("../model/User");

const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");


router.put("/addProduct/:idWarehouse",async(req,res) =>{
    const newProduct = new Product({
        id: req.body.id,
        description: req.body.description,
        critic: req.body.critic,
        quantity: req.body.quantity
    })
    try{
        const warehouse = await Warehouse.findOne({id: {$in: req.params.idWarehouse}})
        await warehouse.updateOne({$push: {products: newProduct}})
    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/createWarehouse", async(req,res) =>{
    const newWarehouse = new Warehouse({
        id: req.body.id
    })
    try{
        const warehouse = await newWarehouse.save()
        res.status(200).json(warehouse)        
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;
