var port = 5150;
var greet = require('./public/greet')
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
/*app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));*/
app.use(require('express').static('public'));

app.get('/', function (req, res) {
  res.send('nawascript');
});

greet.english()
greet.spanish()

require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});
