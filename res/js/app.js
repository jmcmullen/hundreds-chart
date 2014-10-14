// The active challenge.
var task = null;

// The colour selected.
var highlight = "a1";

// The size of the chart.
var size = 100;

// Is the mouse currently down.
var mouseDown = false;

// Toggled boxes while the mouse is down.
var currentlyPressed = [];

// All the colours to be chosen from.
var colours = [
	"a1", "a2", "a3",
	"b1", "b2", "b3",
	"c1", "c2", "c3",
	"d1", "d2", "d3",
	"e1", "e2", "e3",
	"f1", "f2", "f3",
];
        
// Once the pages has loaded ...
$(document).ready(function() {
	// Load fast click.
    FastClick.attach(document.body);
    
	// Set up the menu.
	$(".menu-arrow").sidr();
    
	// Make the menu update on click.
	setSelectedMenu("menu-freestyle");
	$(".main-menu li").click(function(event) {
		if($(this).attr("id") != "menu-clear") {
			setSelectedMenu($(this).attr("id"));
		}
	});
	
    	// Show hundreds chart.
    	createHundredsChart(10);
	setHighlight("a1");
	
	// Resize the grid on screen rotation.
	$(window).resize( function() {
		resizeBoxes();
	});
	
	// Disable scrolling.
	$(window).scroll(function() { return false; });
	
	document.addEventListener("deviceready", animateBoxes(), false);
});
