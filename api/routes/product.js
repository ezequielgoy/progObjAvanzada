
const router = require("express").Router();
const Product = require("../model/Product");

// GET PRODUCT
router.get("/getProductCritic/:id", async (req,res) =>{
    try{
        const product = await Product.findOne({
            id: req.params.id
        });
        res.status(200).json(product.critic);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;
