function whichPlates(input) {
var numbas = [];
var plates = [90,70,50,20,10,5];
for (var i = 0; i < plates.length; i++) {
while (input / plates[i] > 1 ) {
numbas[i] = plates[i];
input = input - plates[i];
} //inner loop
} //outer loop
return numbas;
} //function
console.log(whichPlates(200));
console.log(whichPlates(100));
