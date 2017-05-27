let promiseKiss = new Promise(function(resolve, reject) {
  console.log('sending kisses')
  let sentAKiss = true
  if(sentAKiss){
    resolve('kiss')
  } else {
    reject('non kiss')
  }
})

promiseKiss.then(function(fromResolve) {
  console.log('you recieved a ' + fromResolve)
})
