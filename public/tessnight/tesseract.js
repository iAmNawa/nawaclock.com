var port = 1444;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('express').static('public'));

app.get('/', function (req, res) {
  res.send('tessnight');
});


require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});
