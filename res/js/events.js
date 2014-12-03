window.addEventListener("resize", function(event) {
    renderer.resize(window.innerWidth * scale, window.innerHeight * scale);
	document.getElementsByTagName("canvas")[0].style.width = window.innerWidth + "px";
	document.getElementsByTagName("canvas")[0].style.height = window.innerHeight + "px";
	resizeChart();
});

// Update the mouse on touch events.
window.addEventListener("touchmove", function(event) {
	updateMouseLocation();
	boxMouseMove(getBoxFromMouseLocation());
});

window.addEventListener("touchstart", function(event) {
	updateMouseLocation();
	boxMouseDown(getBoxFromMouseLocation());
});

window.addEventListener("touchend", function(event) {
	//updateMouseLocation();
	boxMouseUp();
});

// Update the mouse on click events.
window.addEventListener("mouseover", function(event) {
	updateMouseLocation();
	boxMouseMove(getBoxFromMouseLocation());
});

window.addEventListener("mousedown", function(event) {
	updateMouseLocation();
	boxMouseDown(getBoxFromMouseLocation());
});

window.addEventListener("mouseup", function(event) {
	//updateMouseLocation();
	boxMouseUp();
});