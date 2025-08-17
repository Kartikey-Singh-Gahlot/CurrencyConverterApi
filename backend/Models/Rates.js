const mongoose = require('mongoose');

const currencyrateSchema =  mongoose.Schema({
    currencyCode : { type : String, maxlength :3 },
    rate : {type: Number }
});

module.exports = new mongoose.model("rates", currencyrateSchema);
