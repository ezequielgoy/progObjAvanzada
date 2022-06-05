
const router = require("express").Router();
const User = require("../model/User");
const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");


router.put("/addProduct/:idWarehouse",async(req,res) =>{
    const newProduct = new Product({
        id: req.body.id,
        quantity: req.body.quantity
    })
    try{
        const warehouse = await Warehouse.findOne({id: {$in: req.params.idWarehouse}})
        const product = await Product.findOne({id: {$in: req.body.id}})
        //const productInWarehouse = await warehouse.products.findOne({id: {$in: req.body.id}})
/*        if (productInWarehouse){
            newQuantity = productInWarehouse.quantity + product.quantity;
            await productInWarehouse.updateOne({$set: {quantity : newQuantity}})
        }
        else{
            
               }*/
        product.quantity += req.body.quantity;
        await warehouse.updateOne({$push: {products: product}})
               
    }catch(err){
        res.status(500).json(err)
    }
});




router.post("/createWarehouse", async (req, res) =>{
    const newWarehouse = new Warehouse({
        id: req.body.id
    })

    try{
       const warehouse= await newWarehouse.save() 
       res.status(200).json(warehouse)
    }catch(err){
        res.status(500).json(err)
    }
});



module.exports = router;
