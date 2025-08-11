const mongoose = require("mongoose");

const currencyrateSchema = new mongoose.Schema({
    currencyCode : { type : String, maxlength :3 },
    rate : {type: Number }
});

const currencyrate = new mongoose.model("currencyrate", currencyrateSchema);

module.exports = currencyrate;