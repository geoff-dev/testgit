var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randColor = document.getElementById("randColor");

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ":";
}

function setRandomGradient(){
	var randColor1 = random_rgb();
	var randColor2 = random_rgb();
	color1.value = randColor1;
	color2.value = randColor2;
	setGradient();
}

function random_rgb() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
	const r = randomBetween(0, 255);
	const g = randomBetween(0, 255);
	const b = randomBetween(0, 255);
	const rgb = rgbToHex(r, g,b);
	return rgb;
}

function rgbToHex(r, g, b){
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c){
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randColor.addEventListener("click", setRandomGradient);