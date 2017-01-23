//created in the command line (for the second time)
//$ = works just like document.querySelectorAll - it returns array of matching elements
//works like a css selector -- needs "." or "#"
//$("img") - to select all img tags
//$(".sale") - to select all elements with a class of sale
//$("#bonus") - to select all elements with id of bonus
//$("li a") - to select all a tags inside of li

$("h1"); //this will put this in a list
$("li");
$("body");
$("ul li a"); //- monkey.comm
$("a"); //all anchor tags
$("#adorable");

//.css - a nice method = $("some selector").css(property, value);

$("#special").css("border", "2px solid red");

var styles = {
	backgroundColor: "pink",
	fontWeight: "bold"
};

$("p").css("color", "#ffff23")
$("#special").css(styles);

$("h1").css("color", "yellow"); //this line is more powerful and we can do a lot more with it than with a single selector
document.querySelector("h1").style.color = "orange";


var styles = {
	color: "red",
	background: "pink",
	border: "2px solid purple"
};

$("h2").css(styles);
$("body").css("background", "#232323");
$("li").css("color", "#ffffff");
$("a").css("font-size", "40px");
$("li").css({             //object is added in place here
	fontSize: "10px", //in jQuery we are using camel case instead of the same dashes that we would use in css
	border: "2px dashed purple",
	background: "rgba(89, 200, 20, 0.5)"
})