const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port1 = 3000;

app.use(morgan('combined'));

app.engine('hbs',handlebars({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.use(express.static("resources\\views\\layouts"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(process.env.PORT||port1, function(){
  console.log(`Example app listening at http://localhost:${port1}`);
})

app.get('/', (req, res) => {
  res.render('home');
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
  res.render('home', { title: 'Bé tập tính', number1, number2, result });
});


