let chore1 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 1')
  })
}

let chore2 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 2')
  })
}

let chore3 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 3')
  })
}

let chore4 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 4')
  })
}

let chore5 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 5')
  })
}

chore1().then(function(result) {
  console.log('finished ' +result)
  return chore2(result)
}).then(function(result) {
  console.log('finished ' +result)
  return chore3(result)
}).then(function(result) {
  console.log('finished ' +result)
  return chore4('done' + result)
}).then(function(result) {
  console.log('finished ' +result)
  return chore5(result)
}).then(function(result) {
  console.log('finished ' + result)
})
