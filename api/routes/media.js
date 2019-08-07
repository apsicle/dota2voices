var express = require("express");
var router = express.Router();
var scraper = require("../utils/dotawikiscraper.js");

router.get("/", function(req, res, next) {
  console.log(req.query.destination);
  // scraper.getOne('Abaddon')
  scraper.getHeroResponses(req.query.destination)
    .then((response) => {
      res.send({ response });
    })
});

module.exports = router;