$(window).load(function() {

  apiCall();
});

function C2F(k) {
  return Math.round(k * (9 / 5) + 32) + "*";
}

var apiCall=function(){
$.getJSON("http://ip-api.com/json", function(data) {
    var lati = data.lat;
    var loni = data.lon;
    console.log(lati);
  console.log(loni);
  console.log(data.city);
  $(".city").html(data.city);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+loni+"&units=metric"+"&type=accurate"+"&APPID=87477587e12826b182b4b7cef844ec61", function(data1) {
    var weath=C2F(data1.main.temp);
    console.log(weath);
    console.log(data1.sys);
    console.log(data1.weather);
   $(".temp").html(weath);
    $(".condition").html(data1.weather[0].description);
  });

});
};
