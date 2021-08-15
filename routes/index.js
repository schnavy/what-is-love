var express = require('express');
var router = express.Router();

const fs = require('fs');



/* GET home page. */
router.get('/', function (req, res, next) {
  try {

    let rawdata = fs.readFileSync('poems.json');
    let data = JSON.parse(rawdata);
    let text = data.alt;
    let img = data.url;

    res.render('index', {
      title: 'Instagram reflecting on love  ',
      text: text,
      imgs: img
    });
  } catch (error) {
    console.log(e);
  }
});

module.exports = router;