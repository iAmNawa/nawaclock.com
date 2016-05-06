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
  var firstInt = winput.value
  var secondInt = binput.value
  console.log(firstInt)
  console.log(secondInt)

}

/* function wevent(e){
  console.log('form update', e.target.value)
}
*/
