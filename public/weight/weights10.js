var a = 90;
var b = 70;
var c = 50;
var d = 20;
var e = 10;
var f = 5;

var putThemOn = [0,0,0,0,0,0];

function whichPlates(input) {
  var total = input;
  while (total > 5) {
    if (total - a >= 90) {
      putThemOn[0]++;
      total = total - a;
      return total;
    } else if (total - b >= 70) {co
      putThemOn
    }
  }
}

console.log(whichPlates(200));
console.log(whichPlates(400));
console.log(putThemOn);
