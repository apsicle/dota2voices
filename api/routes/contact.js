var express = require('express');
var router = express.Router();

router.post("/", function(req, res, next) {
  res.status(200).send('Grats you did the thing. This is just a test page so it\
  didn\'t actually send anything to me or store your info .');
})

module.exports = router;