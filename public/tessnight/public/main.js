document.querySelector('#pleaseWork').style.color = 'green'

var Tesseract = require('tesseract.js')

var myImage = document.querySelector('#imagez')

var whatIt = document.querySelector('#pleaseWork2').innerHTML

Tesseract.recognize(myImage)
         .progress(function  (p) { console.log('progress', p)    })
         .then(function (result) { document.querySelector('#pleaseWork2').innerHTML = 'What is says is:' + result.text })
