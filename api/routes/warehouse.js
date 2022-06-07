
const router = require("express").Router();
const User = require("../model/User");
const Product = require("../model/Product");
const Warehouse = require("../model/Warehouse");
const Stock = require("../model/Stock")


router.post("/addProduct/:idWarehouse",async(req,res) =>{
    try{
        const newStock = new Stock({
            warehouseId : req.params.idWarehouse,
            product: req.body.product,
            quantity: req.body.quantity
        })
        const warehouse = await Warehouse.findOne({id: {$in: req.params.idWarehouse}})
        const inStock = await Stock.findOne({product : {$in: req.body.product}})

        if (await inStock.warehouse === warehouse){
            const newQuantity = inStock.quantity + req.body.quantity;
            inStock.updateOne({$set: {"inStock.quantity" : newQuantity}})
            res.status(200).json(inStock)
        }else{
            res.status(200).save(newStock)
        }
        

        /* SECOND TRY
        const productInWarehouse = await Warehouse.findOne( {products : {newProduct}},
                                                            {'product.id$' : newProduct.id})
        const productsInWarehouse = await warehouse.products
        if (newProduct in productsInWarehouse){
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
            res.status(200).json(productsInWarehouse)  
    
        }/*    FIRST TRY
        warehouse.products.array.forEach(product => {
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
        */


               
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
