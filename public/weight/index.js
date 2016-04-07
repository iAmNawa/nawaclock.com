var max;
var perc;
var calculatedResult;
var enterWeight;
var enterPercentage;
var plates = [45, 35, 25, 15, 10, 5, 2.5];

function calculateWeight () {

 max = document.getElementById('max');
  perc = document.getElementById('percentage');
  enterWeight = max.value;
  enterPercentage = perc.value;
  calculatedResult = enterWeight * enterPercentage / 100;

  if (document.getElementById('male').checked === true) {
    calculatedResult = calculatedResult - 45;
  } else {
    calculatedResult = calculatedResult - 35;
  }

  console.log('enterWeight', enterWeight);
  console.log('enterPercentage', enterPercentage);
  console.log(calculatedResult);
  document.getElementById('result').innerHTML = 'Load Up ' + calculatedResult + ' lbs';

  var plates2 = [90, 70, 50, 20, 10, 5];
  var putThemOn = [0,0,0,0,0,0];
  function whichPlates(input) {
    var i = 0;
    while (i < plates2.length) {
      if (input >= plates2[i]) {
        input -= plates2[i];
        putThemOn[i]++;
      }
      else {
        i++;
      }
    }
    return putThemOn;
  }
  console.log(whichPlates(calculatedResult))  ;
}


var plates2 = [90, 70, 50, 20, 10, 5];
var putThemOn = [0,0,0,0,0,0];
function whichPlates(input) {
  var i = 0;
  while (i < plates2.length) {
    if (input >= plates2[i]) {
      input -= plates2[i];
      putThemOn[i]++;
    }
    else {
      i++;
    }
  }
  return putThemOn;
}
