
const router = require("express").Router();
const Report = require("../model/Report");

// POST REPORT
router.post("/addReport/:product/:quantity/:warehouse/:lab", async(req,res)=>{
    const date = new Date().toLocaleDateString()
    const newReport = new Report({
        product:{
            product:req.params.product,
            quantity: req.params.quantity
        },
        warehouse: req.params.warehouse,
        lab: req.params.lab,
        date: date,
    });
    try{
        const savedReport = await newReport.save()
        res.status(200).json(savedReport)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;
