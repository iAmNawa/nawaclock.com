var plates = [90,70,50,20,10,5]
var answer = whichPlates(200)
function whichPlates(n){

  var numbas = [], c=0
  plates.map(i => {
    var l = Math.floor(n/i)
    while(l--)
      numbas.push(i)
    if(c+= i)
      callback(numbas)
  })

}

console.log(answer)
