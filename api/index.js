const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const authRoute=require('./routes/auth');
const stockRoute=require('./routes/stock');
const warehouseRoute=require('./routes/warehouse');
const productRoute=require('./routes/product')
const reportRoute=require('./routes/report')

//connecting to mongoDB


mongoose.connect(process.env.MDBURI, {useUnifiedTopology: true,useNewUrlParser: true}).
then(()=>console.log('DB connected'))
.catch(err =>{
    console.log(err);
});



//middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/stock", stockRoute);
app.use("/api/warehouse", warehouseRoute);
app.use("/api/product", productRoute);
app.use("/api/report", reportRoute)


app.use(cors());

app.listen(8800, () => {
    console.log("Server running");
});
