var plates = [90, 70, 50, 20, 10, 5];
var putThemOn = [0,0,0,0,0,0];

function whichPlates(input) {
  var i = 0;
  while (i < plates.length) {
    if (input >= plates[i]) {
      input -= plates[i];
      putThemOn[i]++;
    }
    else {
      i++;
    }
  }
  return putThemOn;
}
console.log(whichPlates(125));
