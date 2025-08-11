const router = require('express').Router();
const currencyModel = require('../Models/Rates.js')
const express = require("express");
const app = express();

router.get("/rates", async (req, res)=>{
   let {c1,c2,q} = req.query;
   let one  = await currencyModel.find({currencyCode:c1.toUpperCase()});
   let two = await currencyModel.find({currencyCode:c2.toUpperCase()});
   if(c2.toUpperCase() == 'USD'){
     res.send({ rate : q/(one[0].rate)});
   }
   else if (c1 == c2){
     res.send({rate :q});
   }
   else{
     let r = two[0].rate/ one[0].rate;
     res.send({rate:q*r});
   }
});

router.get("/all", async (req, res)=>{
  let data = await currencyModel.find({});
  res.send(data);

})


module.exports = router;