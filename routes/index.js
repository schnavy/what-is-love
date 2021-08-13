var express = require('express');
var router = express.Router();

const fs = require('fs');



/* GET home page. */
router.get('/', function (req, res, next) {

  let rawdata = fs.readFileSync('poems.json');
  let texte = JSON.parse(rawdata);
  console.log(texte);
  res.render('index', {
    title: 'What is love?',
    texte: texte
  });
});

module.exports = router;