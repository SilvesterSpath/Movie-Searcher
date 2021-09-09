const { application } = require("express");

module.exports = function (req, res, next) {

  // Allow CORS (Cross Origin Resource Sharing)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers, Origin, X-Requested-With, Control-Type, Accept");
  next();
};