const currencyModel = require('../Models/Rates')

const fetchRate = async (req, res)=> {
     let {c1,c2,q} = req.query;
     let one  = await currencyModel.find({currencyCode:c1.toUpperCase()});
     let two = await currencyModel.find({currencyCode:c2.toUpperCase()});
     if(c2.toUpperCase() == 'USD'){
       res.status(200).json({
        success : true,
        data : { rate : q/(one[0].rate )}
       })
     }
     else if (c1 == c2){
       res.status(200).json({
        success : true,
        data : { rate : q }
       })
     }
     else{
       let r = two[0].rate/ one[0].rate;
       res.status(200).json({
        success : true,
        data : { rate : q*r }
       })
     }
}

const fetchAll = async (req, res)=>{
      let dt = await currencyModel.find({},{"currencyCode":1, "rate":1, "_id":0 });
      if(dt.length>0){
        res.status(200).json({
        success : true,
        data : dt
       })
      }
       else{
        res.status(400).json({
        success : false,
        data : "cannot fetch data"
       })
       }
    
}

module.exports = {fetchRate, fetchAll}
