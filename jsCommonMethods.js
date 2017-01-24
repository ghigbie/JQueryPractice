//created in command line
//.text() can be used to set or get text , it strips out the html elements and only gives the text
$("h1").text();//text() is considered html safe - it treats all html as text - probably escapes it ut
$("ul").text();//returns string that is space separated with the text of all the subordinate li's
$("li").text(); //returns one string of all the lis, one unified string
//if we pass in a value it changes the text
$("h1").text("The most awesome and the bestest jQuery Methods Page!!!");
$("li").text("My cogi is is awesome!"); //this would require a loop in js

//html() - gets the html contents of the first element in the set of matched elements or set the html content of evey mathcched element
$("h1").html(); //this is the same as inner html
$("ul").html("<li>I hacked your UL</li><li>My corgi is more awesome than yours</li>");
$("li").html("<a href='http:\/\/www.google.com'>CLICK ME TO GO TO GOOGLE</a>");//

//.attr() - used t retrieve the value of an attribute for matched elements
$("img").css("width", "200px");
$("img").attr("src", "https://pbs.twimg.com/profile_images/534840446174781442/MVt_YYKT.jpeg");
$("img").css("width", "500px");

var img = document.querySelector("img");
img.addEventListener("click", function(){
	$("img").attr("src", "http://pixel.nymag.com/imgs/daily/intelligencer/2016/08/18/18-honey-badger-teeth.w710.h473.2x.jpg");
});

$("body").css("background", "grey");

$("input").attr("type", "color");
$("input").attr("type", "checkbox");
$("input").attr("type", "text");

