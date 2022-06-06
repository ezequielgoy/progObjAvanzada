
const router = require("express").Router();
const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");

router.post("/addProduct", async(req,res) =>{
    const newProduct = new Product({
        id: req.body.id,
        description: req.body.description,
        critic: req.body.critic
    })
    try{
        const product= await newProduct.save()
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
});


router.put("/:idWarehouse/restock", async(req,res)=>{
    const reStockInfo = new Object({
        id: req.body.id,
        quantity: req.body.quantity,
        idWarehouse: req.params.idWarehouse
    })
    try{
        const warehouseStock = await Warehouse.findOne({id: {$in: req.params.idWarehouse}})
        const productInWarehouse = await warehouseStock.products.findOne({id: {$in: req.body.id}})
        await productInWarehouse.updateOne({$set: {quantity: req.body.quantity + productInWarehouse.quantity}})
        res.status(200).json(productInWarehouse)
    }catch(err){
        res.status(500).json(err)
    }
    
})


module.exports = router;
