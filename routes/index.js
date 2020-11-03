var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const number1 = parseFloat(req.body.number1);
  const number2 = parseFloat(req.body.number2);
  const dau = req.body.pheptinh;
  let result;
    if (dau == "+") {
        result = number1 + number2;
    }
    else if (dau == "-") {
        result = number1 - number2;
    }
    else if (dau == "*") {
        result = number1 * number2;
    }
    else if (dau == "/") {
        if (number2 === 0) {
            result = "Không hợp lệ"
        }
        else {
            result = number1 / number2;
        }
    }
  res.render('index', { title: 'Bé tập tính', number1, number2, result });
});

module.exports = router;
