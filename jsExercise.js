//created in command line
if(jQuery){
	alert("jQuery Loaded!");	
	}else{
		alert("No jQuery : (");
}

$("div").css("background", "#7631b7");
$(".highlight").css("width", "200px");
$("#third").css("border",  "solid 1px #cc6d24");
$("div").first().css("color", "#cc24bb");
$("div:first-of-type").css("color", "#cc24bb"); //uses css selector
$("div:first").css("color", "#cc24bb"); //this is built into jQuery and is a little slower