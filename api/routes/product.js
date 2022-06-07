
const router = require("express").Router();
const Product = require("../model/Product");

// GET PRODUCT
router.get("/getProduct/:id", async (req,res) =>{
    try{
        const product = await Product.find({
            id: req.params.id
        });
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;
