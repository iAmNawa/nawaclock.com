$(document).ready(function() {

  $(".button2").click(function (){
 $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?", function(json){
            $(".quote").empty();
   theQuote = json.quote;
   theAuthor = json.author;

            $(".quote").append("<h1>"+'"'+json.quote+'"'+"</h1>"+"<br>"+"<h3>"+"-"+json.author+"</h3>");


  });

});
    $(".button").click(function (){
    var tweet = "https://twitter.com/intent/tweet?text="+theQuote+" "+theAuthor;
    window.open(tweet,"_blank");

});

});
