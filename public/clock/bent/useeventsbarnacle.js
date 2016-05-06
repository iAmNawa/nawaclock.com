var winput = document.querySelector('#worker')
var binput = document.querySelector('#breaker')
var submit = document.querySelector('#submit')
//var woutput = document.querySelector('#workero')

// the click event fires when you click
submit.addEventListener('click', click, false)

// the change event fires when you move outside the element
//winput.addEventListener('change', wevent, false)

//fires when submit button is clicked
function click(e){
  var firstInt = Number(winput.value)
  var secondInt = Number(binput.value)
var i = firstInt


var myInterval = setInterval(function() {
    document.getElementById("workero").innerHTML = "Number: " + i

    if (i === 0) {
       breakTime()
       clearInterval(myInterval)
        //call your function
    }
    else {
        i--
       }
    }, 1000)

}

function breakTime(f) {
    var secondInt = Number(binput.value)
    var j = secondInt
var myInterval2 = setInterval(function() {
    document.getElementById("workero").innerHTML = "Number: " + j

    if (j === 0) {
       clearInterval(breakTime)
        //call your function
    }
    else {
        j--
       }
    }, 1000)
}




/* function wevent(e){
  console.log('form update', e.target.value)
}
*/
