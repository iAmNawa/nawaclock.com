function whichPlates(input) {
  var numbas = [];
  var plates = [90, 70, 50, 20, 10, 5];
   for (var i = 0; i < plates.length; i++) {
     if (plates[i] < input) {
       numbas = plates[i];

     } //inside loop
   } //outer loop
   return numbas;
   } //function
console.log(whichPlates(200));
