var express = require('express');
var router = express.Router();

const fs = require('fs');



/* GET home page. */
router.get('/', function (req, res, next) {
  try {

    let rawdata = fs.readFileSync('poems.json');
    let data = JSON.parse(rawdata);

    res.render('index', {
      title: 'Instagram reflecting on love  ',
      text: data,
    });
  } catch (error) {
    console.log(e);
  }
});

module.exports = router;