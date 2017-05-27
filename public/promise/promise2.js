let chore1 = function() {
  return new Promise(function(resolve, reject) {
    resolve('chore 1 ')
  })
}

let chore2 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message +'chore 2 ')
  })
}

let chore3 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + 'chore 3 ')
  })
}

let chore4 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + 'chore 4 ')
  })
}

let chore5 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + 'chore 5 ')
  })
}

chore1().then(function(result) {
  return chore2(result)
}).then(function(result) {
  return chore3(result)
}).then(function(result) {
  return chore4(result)
}).then(function(result) {
  return chore5(result)
}).then(function(result) {
  console.log('finished ' + result)
})
