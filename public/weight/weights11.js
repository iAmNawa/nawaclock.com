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
console.log(whichPlates(425));

function doubleIt(inpoot) {
  var fortyFive = inpoot[0] * 2;
  var thirtyFive = inpoot[1] * 2;
  var twentyFive = inpoot[2] * 2;
  var ten = inpoot[3] * 2;
  var five = inpoot[4] * 2;
  var twoPointFive = inpoot[5] * 2;
  return "Put on " + fortyFive + " 45lb. plates," +
  "\n Put on " + thirtyFive + " 35lb. plates," +
  "\n Put on " + twentyFive + " 25lb. plates," +
  "\n Put on " + ten + " 10lb. plates," +
  "\n Put on " + five + " 5lb. plates" +
  "\n Put on " + twoPointFive + " 2.5lb. plates";
}
console.log(doubleIt(putThemOn));
