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