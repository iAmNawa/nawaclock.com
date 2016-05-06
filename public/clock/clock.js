function myFunction() {
   var x = document.getElementById("workout");
 for (var i = x.elements[0].value; i > 0; i-- ) {
   setInterval(function(){ console.log("Hello"); }, 1000);
 }
    console.log(x.elements[0].value);
    console.log(x.elements[1].value);
//    document.getElementById("demo").innerHTML = text;
}
