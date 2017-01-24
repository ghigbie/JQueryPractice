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
$("img").css("width", "200px");

var img = document.querySelector("img");
img.addEventListener("click", function(){
	$("img").attr("src", "http://pixel.nymag.com/imgs/daily/intelligencer/2016/08/18/18-honey-badger-teeth.w710.h473.2x.jpg");
});

$("body").css("background", "grey");

$("input").attr("type", "color");
$("input").attr("type", "checkbox");
$("input").attr("type", "text");

$("img:first-of-type").attr("src", "http://pixel.nymag.com/imgs/daily/intelligencer/2016/08/18/18-honey-badger-teeth.w710.h473.2x.jpg");
$("img").last().attr("src", "http://pixel.nymag.com/imgs/daily/intelligencer/2016/08/18/18-honey-badger-teeth.w710.h473.2x.jpg");
$("img").attr("src", "http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/puppy-2.jpg");

//val() - extracts the value of an input
$("input").val("Ka-BOOM!!!"); //we could use this to clear the value of an item
$("select").val(); //will tell you what a user has selected

$("h1").addClass("correct");
//$("li").addClass("wrong"); //selets all elements of li
//$("li").removeClass("wrong");
$("p").addClass("wrong");
$("li").first().addClass("done");
$("li").toggleClass("done");

$("button").click(function(){
	var text = $(this).text(); //this will ge the text of the button that was clicked
	alert(`You jerk! You clicked ${text}`);
	$(this).css("background", "steelblue"); //we need to use thejQuery version of this
});
$("#submit").click(function(){
	alert("you clicked the submit button");
	$("h1").css("background", "pink");
});
$("h1").click(function(){
	alert("you clicked the h1!!!");
});
//keypress() - is used to get input from a form - it between a key down and key up
//we select something and then chain on key press()

$("input").keypress(function(){
	console.log("you pressed a key");
});
$("input").keypress(function(event){
	console.log(event);
});






