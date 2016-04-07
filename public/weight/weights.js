function whichPlates(input) {
  var numbas = [];
  var plates = [90, 70, 50, 20, 10, 5];
   for (var i = 0; i < plates.length; i++) {
    for (var j = 0; j < plates[i]; j++) {
      numbas += plates[i];

    } //second loop
  } // first loop
    console.log(numbas);
    return numbas;
  } //function
console.log(whichPlates(20));
