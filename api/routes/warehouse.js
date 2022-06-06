
const router = require("express").Router();
const User = require("../model/User");
const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");



router.put("/addProduct/:idWarehouse",async(req,res) =>{
    try{
        const warehouse = await Warehouse.findOne({id: {$in: req.params.idWarehouse}})
        const newProduct = await Product.findOne({id: {$in: req.body.id}})
        const productInWarehouse = await Warehouse.findOne({products : {newProduct}})
        
        if (productInWarehouse === newProduct){
            const newQuantity = productInWarehouse.quantity + req.body.quantity;
            warehouse.products.updateOne(
                {},
                {$set: {"warehouse.$[element].quantity" : newQuantity}},
                {arrayFilters: [ {"element.id" : productInWarehouse.id}]
            })
            res.status(200).json(productInWarehouse)
        }else{
            newProduct.quantity = req.body.quantity;
            await warehouse.updateOne({$push: {products: newProduct}})  
            res.status(200).json(newProduct)  
    
        } 
        /*warehouse.products.array.forEach(product => {
            if (req.body.id === product.id){
                const newQuantity = product.quantity + req.body.quantity;
                warehouse.products.updateOne(
                    {},
                    {$set: {"warehouse.$[element].quantity" : newQuantity}},
                    {arrayFilters: [ {"element.id" : product.id}]
                })
                res.status(200).json(product)  
            }else{
                res.status(404)
            }
        });
        /*
        if (await productInWarehouse === true){
            product.quantity = productInWarehouse.quantity + req.body.quantity;    
            await productInWarehouse.updateOne({$set: {quantity : newQuantity}})
            res.status(200).json(product)
        }
        else{

            }*/


               
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
