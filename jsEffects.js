//this file was created in the command line
//$("div").fadeOut();

// $("button").on("click", function(){
// 	$("div").fadeOut(1500, function(){
// 		console.log("Fade Completeed");
// 		$(this).remove();
// 		console.log("items removed");
// 	});
// });
//the divs are still in the DOM, but they are hdinging

// $("button").on("dblclick", function(){
// 	$("p").fadeIn(2000, function(){
// 		console.log("This paragraph has been brought into existence.");
// 	});
// });

$("button").on("dblclick", function(){
	$("p").fadeToggle(2000, function(){
		console.log("This paragraph has been brought into existence.");
	});
	$("div").faddToggle(1500, function(){
		console.log("Fade Completeed");
		$(this).remove();
		console.log("items removed");
	});
});