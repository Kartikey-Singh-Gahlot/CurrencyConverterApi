const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const currencyModel = require("./models/currencyData.js");
require("dotenv").config();
const app = express();

app.use(cors());


async function setConnection(){
    await mongoose.connect(process.env.MONGODBURL);
}

setConnection().then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})


app.get("/currency/rates", async (req, res)=>{
   let {c1,c2} = req.query;
   let one  = await currencyModel.find({currencyCode:c1.toUpperCase()});
   let two = await currencyModel.find({currencyCode:c2.toUpperCase()});
   if(c2 == 'USD'){
     res.send({ rate : one[0].rate});
   }
   else if (c1 == c2){
     res.send({rate :1});
   }
   else{
     let r = two[0].rate/ one[0].rate;
     res.send({rate:r});
   }
});

app.get("/currency/all", async (req, res)=>{
  let data = await currencyModel.find({});
  res.send(data);
});


module.exports = app;
