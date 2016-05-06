var submit = document.querySelector('#submit')
var winput = document.querySelector('#worker')
var binput = document.querySelector('#breaker')

var woutput = document.querySelector('#workero')



// the click event fires when you click
submit.addEventListener('click', click, false)

// the change event fires when you move outside the element
//winput.addEventListener('change', wevent, false)

function click(e){

  console.log('you clicked submit\nwinput is:%s\nbinput is:%s',
    winput.value,
    binput.value
  )
}

function wevent(e){
  console.log('form update', e.target.value)
}
