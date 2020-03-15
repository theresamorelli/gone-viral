var express = require("express");
var router = express.Router();
const csvtojson = require("csvtojson");
const request = require('request');
const csvFilePath =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid";

router.get("/confirmed", async function(req, res, next) {
  // const csvFilePath =
    // "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";
  csvtojson()
    .fromStream(request.get(`${csvFilePath}-Confirmed.csv`))
    .then(jsonObj => {
      res.send(jsonObj)
    });
});

router.get("/deaths", async function(req, res, next) {
  csvtojson()
    .fromStream(request.get(`${csvFilePath}-Deaths.csv`))
    .then(jsonObj => {
      res.send(jsonObj)
    });
});

module.exports = router;
