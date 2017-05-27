let promiseKiss = new Promise(function(resolve, reject) {
  console.log('sending kisses')
  let sentAKiss = true
  if(sentAKiss){
    resolve('kiss')
  } else {
    reject('kiss')
  }
})

promiseKiss.then(function(fromResolve) {
  console.log('you received a ' + fromResolve)
}).catch(function(fromReject) {
  console.log('you did not receive a ' + fromReject)
})
