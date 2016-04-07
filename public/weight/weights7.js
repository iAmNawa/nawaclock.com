function whichPlates(input) {
var numbas = [];
var total=0;
var plates = [90, 70, 50, 20, 10, 5];
for (var i = 0; i < plates.length; i++) {
if( total+plates[i]<=input)
{
total += plates[i];
numbas.push(plates[i]);
}
}
console.log(numbas);
console.log(input);
return numbas;
} //function
console.log(whichPlates(200));
