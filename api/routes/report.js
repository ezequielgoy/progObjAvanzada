
const router = require("express").Router();
const Report = require("../model/Report");

// POST REPORT
router.post("/addReport/:product/:quantity/:warehouse/:lab", async(req,res)=>{
    const date = new Date().toLocaleDateString()
    const newReport = new Report({
        product:req.params.product,
        quantity: req.params.quantity,
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


//UPDATE REPORT USAGE

router.put("/update/:id/:usage", async(req,res)=>{
    try{
        const report = await Report.findOne({_id : {$in :req.params.id}})
        await report.updateOne({$set: {usage: req.params.usage}})
        res.status(200).json(report)
    }catch(err){
        res.status(500).json(err);
    }
})


//GET REPORTS BY LAB

router.get("/getByLab/:lab", async(req,res) =>{
    try{
        const report = await Report.find({
            lab : req.params.lab
        });
        res.status(200).json(report)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET REPORT BY DATE
router.get("/getByDate/", async(req,res) =>{
    try{
        const report = await Report.find({
            date: req.body.date
        })
        res.status(200).json(report);
    }catch(err){
    res.status(500).json(err)
}})


module.exports = router;
