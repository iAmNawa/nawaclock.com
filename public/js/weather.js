/* WEATHER */

/* TODAY'S WEATHER */

(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?id=7261058";
  var apiKey = "f73b0a8f3e90b9ded92737672aa2aa41"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
  var httpRequest;
  makeRequest();

  // create and send an XHR request
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url + '&appid=' + apiKey);
    httpRequest.send();
  }
  // handle XHR response
  function responseMethod() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
       updateUISuccess(httpRequest.responseText)
      } else {
       updateUIError()
      }
      console.log(httpRequest.responseText);
    }
  }
  // handle XHR success
  function updateUISuccess(responseText) {
    var response = JSON.parse(responseText)
    var condition = response.weather[0].main
    var degC = response.main.temp - 273.15
    var degCInt = Math.floor(degC)
    var degF = degC * 1.8 + 32
    var degFInt = Math.floor(degF)
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
    var city = response.name
    var weatherBox = document.getElementById('weather')
    weatherBox.innerHTML = "<p>Location: " + city + "</p><p>Temperature: "  + degFInt + "&#176; Fahrenheit</p><p>Sky: " + condition + "</p><p>Humidity: " + humidity + "%</p><p>Wind Speed: " + windSpeed + " MPH</p>"
  }

  //handle XHR error
  function updateUIError() {
    var weatherBox = document.getElementById('weather')
    weatherBox.className = "hidden"
  }
})();

/* 5 DAY FORECAST */

(function() {
  var url = "http://api.openweathermap.org/data/2.5/forecast?id=7261058";
  var apiKey = "f73b0a8f3e90b9ded92737672aa2aa41"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
  var httpRequest;
  makeRequest();

  // create and send an XHR request
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url + '&appid=' + apiKey);
    httpRequest.send();
  }
  // handle XHR response
  function responseMethod() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
       updateUISuccess(httpRequest.responseText)
      } else {
       updateUIError()
      }
      console.log(httpRequest.responseText);
    }
  }
  // handle XHR success
  function updateUISuccess(responseText) {
    var response = JSON.parse(responseText)
    console.log(response)
    var weatherBox = document.getElementById('weather2')
}

  //handle XHR error
  function updateUIError() {
    var weatherBox = document.getElementById('weather')
    weatherBox.className = "hidden"
  }
})();
