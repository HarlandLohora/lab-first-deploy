const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyAd7Fc6Uz_om_P_l0Rv6Hymf3-uicomfmg" });
});

module.exports = siteController;
