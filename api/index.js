const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');


const mongoose = require('mongoose');
//const userRoute=require('./routes/user');
//const authRoute=require('./routes/auth');


app.use(express.json());

app.use(cors());

app.listen(8800, () => {
    console.log("Server running");
});
