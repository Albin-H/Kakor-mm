document.getElementById("kakor").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;

document.getElementById("lang").innerHTML =navigator.language;

if(navigator.javaEnabled == "true"){
	document.getElementById("java").innerHTML ="javaEnabled is true"

}
else{
	document.getElementById("java").innerHTML ="javaEnabled is false"
}


if(navigator.language == "sv-SE"){
	document.getElementById("sprak").innerHTML ="Valt språk: Svenska";
}

else{
	document.getElementById("sprak").ínnerHTML ="Annat språk valt";
}