const router = require('express').Router();
const currencyModel = require('../Models/Rates.js')
const express = require("express");
const app = express();
const {fetchRate, fetchAll} = require("../Controllers/UtilityControllers.js")

router.get("/rates", fetchRate);
router.get("/all", fetchAll );

module.exports = router;