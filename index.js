var bodyParser = require('body-parser')
let express = require('express');
var app = express()
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

var users = {
  'paco':'noni',
  'oscar':'noni',
}

app.get('/login', function (req, res){
  res.render('loginForm');
});

app.post('/login', function (req, res){
  var inputUser = req.body.username;
  var inputPass = req.body.password;
  var user = "";
  if (localStorage.getItem(inputUser) == inputPass) {
        user = inputUser;
  }
  res.render('loginFormPost', {user});
});



app.get('/register', function (req, res){
  res.render('registerForm');
});

app.post('/register', function (req, res){
  var inputUser = req.body.username;
  var inputPass = req.body.password;
  localStorage.setItem(inputUser, inputPass);
  res.render('registerFormPost');
});

app.listen(3000, function(){
  console.log('Exameple app listening on port 3000');
});
