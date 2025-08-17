const express = require("express");
const cors = require("cors");
const app = express();
const Routes = require('./Routes/Routes.js');

require('./Models/DB.js');


app.use(cors({ origin: true } ) );
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/currency", Routes);

module.exports = app;