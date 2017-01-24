//this file was created in the command line
//$("div").fadeOut();

$("button").on("click", function(){
	$("div").fadeOut(1500, function(){
		console.log("Fade Completeed");
		$(this).remove(function(){
			console.log("divs removed from DOM");
		})
	});
});
//the divs are still in the DOM, but they are hdinging