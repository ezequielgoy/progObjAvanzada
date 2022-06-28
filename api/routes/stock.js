
const router = require("express").Router();
const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");
const Stock = require("../model/Stock");

router.post("/addProduct/:idWarehouse", async(req,res) =>{
    const newStock = new Stock({
        warehouse: req.params.idWarehouse,
        product: req.body.id,
        critic: req.body.critic,
        quantity: req.body.quantity
    })
    try{
        const stock= await newStock.save()
        res.status(200).json(stock)
    }catch(err){
        res.status(500).json(err)
    }
});

// ReStock existing products
router.put("/restock/:warehouse/:newQuantity", async(req,res)=>{
    try{
        const inStock = await Stock.findOne({product : {$in: req.body.product}});
        await inStock.updateOne({$set: {quantity : req.params.newQuantity}})
        res.status(200).json(inStock)
    }catch(err){
        res.status(500).json(err)
    }
})

//ReStock nonExisting products
router.post("/addStock/:warehouse/:quantity/:product", async(req,res)=>{
    const newStock = new Stock({
        warehouse: req.params.warehouse,
        product:req.params.product,
        quantity:req.params.quantity
    })
    try{
        const savedNewStock = await newStock.save()
        res.status(200).json(savedNewStock)
    }catch(err){
        res.status(500).json(err)
    }
})

// Extract Products
router.put("/extract/:warehouse/:newQuantity", async(req,res)=>{
    try{
        const inStock = await Stock.findOne({product : {$in: req.body.product}});
        await inStock.updateOne({$set: {quantity : req.params.newQuantity}})
        res.status(200).json(inStock)
    }catch(err){
        res.status(500).json(err)
    }
})


// GET PRODUCTS
router.get("/getProducts/:idWarehouse", async (req,res) =>{
    try{
        const products = await Stock.find({
            warehouse: req.params.idWarehouse
        });
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;
