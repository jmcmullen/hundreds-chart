// Amount of tiles per row.
var rows = 10;

// Amount of tiles per column.
var cols = 10;

// Set the correct pixel ratio scale.
var scale = window.devicePixelRatio;

// Is the mouse currently down.
var mouseDown = false;

// Store the mouse coords.
var mouseX, mouseY;

// Toggled boxes while the mouse is down.
var currentlyPressed = [];

// Create an new instance of a pixi stage.
var interactive = true;
var stage = new PIXI.Stage(0xFFFFFF, interactive);

// Create a renderer instance.
var renderer = PIXI.autoDetectRenderer(window.innerWidth * scale, window.innerHeight * scale);

// Add the renderer view element to the DOM.
document.body.appendChild(renderer.view);
document.getElementsByTagName("canvas")[0].style.width = window.innerWidth + "px";
document.getElementsByTagName("canvas")[0].style.height = window.innerHeight + "px";

// Request inital frame and loop it.
requestAnimFrame(animate);

// Create the top menu.
function createMenu() {
	var menu = new PIXI.Graphics();
	menu.anchor = 0.0;
	menu.beginFill(0x000000);
	menu.drawRect(0, 0, window.innerWidth * scale, 50 * scale);
	stage.addChildAt(menu, stage.children.length);
}

// Create the number chart.
function createChart(max) {
	rows = max / 10;
	var count = 1,
		width = (window.innerWidth - 3) / rows,
		height = (window.innerHeight - 53) / cols,
		posX = 3,
		posY = 53;
    for (var i = 0; i < rows; i ++) {
		// Create a new row of boxes.
        for(var j = 0; j < cols; j ++) {
			// Create a box object.
            var box = new Box(
				count, 
				posX * scale, 
				posY * scale, 
				(width - 3) * scale, 
				(height - 3) * scale
			);
			// Add a box and it's text to the stage.
			stage.addChildAt(box.text, stage.children.length);
			stage.addChildAt(box.sprite, 0);
			// Increment postioning for next box.
			posX += width;
            count ++;
        }
        // Start a new row.
		posY += height;
		posX = 3;
    }
}

function createWelcomeMessage() {
	console.log("Hundreds Chart (" + window.innerWidth + "x" + window.innerHeight + " @ x" + scale + " Pixel Ratio)");
}

function resizeChart() {
	var count = 1,
		width = (window.innerWidth - 3) / rows, 
		height = (window.innerHeight - 53) / cols,
		posX = 3,
		posY = 53;
    for (var i = 0; i < rows; i ++) {
		// Create a new row of boxes.
        for(var j = 0; j < cols; j ++) {
			getBox(count).sprite.texture.height = height - 3;
			getBox(count).sprite.texture.width = width - 3;
			getBox(count).sprite.position.x = posX * scale;
			getBox(count).sprite.position.y = posY * scale;
			getBox(count).sprite.width = (width - 3) * scale;
			getBox(count).sprite.height = (height - 3) * scale;
			getBox(count).text.position.x = (posX + width / 2) * scale;
			getBox(count).text.position.y = (posY + height / 2) * scale;
			getBox(count).text.setStyle({font: (height / 3) + "px Arial", fill: "black"});
			posX += width;
            count ++;
        }
        // Start a new row.
		posY += height;
		posX = 3;
    }
}

// Update the mouse coords.
function updateMouseLocation() {
	// Check if there is a touch screen.
	if(event.clientX != null) {
		// There is no touch screen so use the mouse positions.
		mouseX = event.clientX * scale;
		mouseY = event.clientY * scale;
	} else {
		// There is a touch screen so use it.
		mouseX = event.touches[0].pageX * scale;
		mouseY = event.touches[0].pageY * scale;
	}	
}

// Draw the initial chart.
createWelcomeMessage();
createChart(100);
createMenu();

// Adjust sprites to match device resolution.
function scale() {
	
}

// Changes to be made when a new frame is requested.
function animate() {
	
	// Adjust sprites to match device resoluction.
    // resizeChart();
    
	// Loop requesting a new frame.
	requestAnimFrame(animate);
	
    // Render the stage.
    renderer.render(stage);
}