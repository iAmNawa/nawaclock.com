var plates = [90, 70, 50, 20, 10, 5];

function whatPlates(calculatedWeightToLift){
  // how many plates we need of [45, 35, 25, 15, 10, 5, 2.5]
  var result = [0,0,0,0,0,0,0];
  console.log(result)
  //variable to use for our loop
  var i = 0;
  //loop through the array of plates
  //this loop only moves forwards because of the second if statement
  while (i < plates.length) {
    console.log(i)
    //if our weight is more than 2 plates add 2
    if (2*plates[i]<=calculatedWeightToLift) {
      //reduce the weight left by those 2 plates
      calculatedWeightToLift = calculatedWeightToLift - (2*plates[i]);
      console.log(calculatedWeightToLift);
      //add 2 plates to our results array
      result[i] += 2;
    }
    //check if we could fit 2 more of the plate we're already at
    if (2*plates[i]>=calculatedWeightToLift) {
      //nope we can't move forwards in plates array
      i++;
    }
  }
  console.log(result);
  return result;
}

console.log(whatPlates(450));
