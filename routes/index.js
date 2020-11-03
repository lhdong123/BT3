const { Router } = require('express');
var express = require('express');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  console.log(req.body);
  const number1 = parseFloat(req.body.number1);
  const number2 = parseFloat(req.body.number2);
  const dau = req.body.pheptinh;
  let result;
    if (dau == "+") {
        result = number1 + number2;
        res.render('index', { title: 'Bé tập tính', number1, number2, result, check1: 'checked'});
    }
    else if (dau == "-") {
        result = number1 - number2;
        res.render('index', { title: 'Bé tập tính', number1, number2, result, check2: 'checked'});
    }
    else if (dau == "*") {
        result = number1 * number2;
        res.render('index', { title: 'Bé tập tính', number1, number2, result, check3: 'checked'});
    }
    else if (dau == "/") {
        if (number2 === 0) {
            result = "Không hợp lệ"
            res.render('index', { title: 'Bé tập tính', number1, number2, result, check4: 'checked'});
        }
        else {
            result = number1 / number2;
            res.render('index', { title: 'Bé tập tính', number1, number2, result, check4: 'checked'});
        }
    }
  
});

module.exports = router;
