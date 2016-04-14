var plates = [45, 35, 25, 10, 5, 2.5];
var putThemOn = [0,0,0,0,0,0];

function whatPlates(calculatedWeightToLift){

  var i = 0;

  while (i < plates.length) {
    if (2*plates[i]<=calculatedWeightToLift) {
      calculatedWeightToLift = calculatedWeightToLift - (2*plates[i]);
      putThemOn[i] += 2;
    }
    if (2*plates[i]>=calculatedWeightToLift) {
      i++;
    }
  }
  return putThemOn;
}
console.log(whatPlates(425));

function doubleIt(inpoot) {
  var fortyFive = inpoot[0];
  var thirtyFive = inpoot[1];
  var twentyFive = inpoot[2];
  var ten = inpoot[3];
  var five = inpoot[4];
  var twoPointFive = inpoot[5];
  return"Put on " + fortyFive + " 45lb. plates," +
  "\n Put on " + thirtyFive + " 35lb. plates," +
  "\n Put on " + twentyFive + " 25lb. plates," +
  "\n Put on " + ten + " 10lb. plates," +
  "\n Put on " + five + " 5lb. plates" +
  "\n Put on " + twoPointFive + " 2.5lb. plates";
}
console.log(doubleIt(putThemOn));
