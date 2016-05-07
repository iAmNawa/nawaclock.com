var ainput = document.querySelector('#worker')
var binput = document.querySelector('#breaker')
var cinput = document.querySelector('#timer')
var submit = document.querySelector('#submit')
var audio = new Audio('bent/audio/beep-02.mp3')
var audio2 = new Audio('bent/audio/Go.mp3')
var audio3 = new Audio('bent/audio/breaktime.mp3')
var times = 0;
//var woutput = document.querySelector('#workero')

// the click event fires when you click
submit.addEventListener('click', click, false)

// the change event fires when you move outside the element
//winput.addEventListener('change', wevent, false)

//fires when submit button is clicked
function click(e){
  document.getElementById("worker")
var i = Number(ainput.value)
setTimeout(function(){ audio2.play(); }, 1000);

var myInterval = setInterval(function() {
    document.getElementById("workero").innerHTML = "Number: " + i
    if (i === 0) {
       clearInterval(myInterval)
       breakTime()
        //call your function
    }
    else {
        i--
       }
    }, 1000)

}

function breakTime(f) {
var j = Number(binput.value)
var k = Number(cinput.value)
setTimeout(function(){ audio3.play(); }, 1000);

var myInterval2 = setInterval(function() {
    document.getElementById("breakero").innerHTML = "Number: " + j

    if (j === 0) {
       clearInterval(myInterval2)
       times++
       console.log(times)
       if (k == times) {
         document.getElementById("workero").innerHTML = "Great job!"
         document.getElementById("breakero").innerHTML = "You finished!"
         times = 0
         console.log(times)
       } else {

       click() }
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
