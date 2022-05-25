const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');


const mongoose = require('mongoose');
const authRoute=require('./routes/auth');


//connecting to mongoDB

const uri = "mongodb+srv://Admin:XslPit5e78RxXGIC@chattest.mlt6c.mongodb.net/pooAvanzada?retryWrites=true&w=majority";

mongoose.connect(uri, {useUnifiedTopology: true,useNewUrlParser: true}).
then(()=>console.log('DB connected'))
.catch(err =>{
    console.log(err);
});



//middleware
app.use(express.json());

app.use("/api/auth", authRoute);



app.use(cors());

app.listen(8800, () => {
    console.log("Server running");
});
