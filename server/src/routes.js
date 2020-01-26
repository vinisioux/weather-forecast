const express = require("express");

const ForecastController = require("./controllers/ForecastController");

const routes = express.Router();

routes.get("/forecast", ForecastController.index);

module.exports = routes;
