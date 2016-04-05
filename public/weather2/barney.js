$(window).load(function() {

  apiCall();
});

var apiCall=function(){
$.getJSON("http://ip-api.com/json", function(data) {
    var lati = data.lat;
    var loni = data.lon;
    console.log(lati);
  console.log(loni);
  console.log(data.city);
  $(".city").html(data.city);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+loni+"&units=metric"+"&type=accurate"+"&APPID=11e9338b9590df864561b96c16f91b12", function(data1) {
    var weath=data1.main.temp;
    console.log(weath);
    console.log(data1.sys);
    console.log(data1.weather);
   $(".temp").html(weath);
    $(".condition").html(data1.weather[0].description);
  });

});
};
