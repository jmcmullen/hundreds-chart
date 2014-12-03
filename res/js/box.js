// An array of every box created.
var boxes = [];

// This is our box object.
function Box(value, x, y, width, height) {
	// The number displayed on the box.
	this.value = value;
	// Create a background texture for the box.
	this.rectangle = new PIXI.Graphics();
	this.rectangle.anchor = 0.5;
	this.rectangle.beginFill(0xDEDEDE);
	this.rectangle.drawRect(x, y, width, height);
	// Create the interactable sprite.
	this.sprite = new PIXI.Sprite(this.rectangle.generateTexture());
	this.sprite.position.x = x;
	this.sprite.position.y = y;
	this.sprite.anchor.x = 0.0;
	this.sprite.anchor.y = 0.0;
	this.sprite.tint = 0xDEDEDE;
	this.sprite._interactive = true;
	/*
	// Mouse down and touch start listener.
	this.sprite.mousedown = this.sprite.touchstart = function(mouseData) {
		boxMouseDown(mouseData, value);
	}
	// Mouse up and touch end listener.
	this.sprite.mouseup = this.sprite.touchend = function(mouseData) {
		boxMouseUp(mouseData, value);
	}
	// Mouse over and touch move listener.
	this.sprite.mouseover = this.sprite.touchmove = function(mouseData) {
		boxMouseMove(mouseData, value);
	}
	*/
	// Create the text to show the number on the box.
	this.text = new PIXI.Text(this.value, {font: (height / 3) + "px Arial", fill:"black"});
	this.text.anchor.x = 0.5;
	this.text.anchor.y = 0.4;
	this.text.position.x = x + width / 2;
	this.text.position.y = y + height / 2;
	// Create a container for graphical elements.
	this.container = new PIXI.DisplayObjectContainer();
	this.container.addChild(this.sprite);
	this.container.addChild(this.rectangle);
	this.container.addChild(this.text);
	// Add this object to the list of all boxes.
	boxes[boxes.length] = this;
}

// Get a box object by it's value.
function getBox(value) {
	for(box in boxes) {
		if(boxes[box].value === value) {
			return boxes[box];
		}
	}
	// If none were found.
	return null;
}

// Return the box the mouse is currently over.
function getBoxFromMouseLocation() {
	for(box in boxes) {if(boxes[box].sprite.position.x <= mouseX) {
			if(boxes[box].sprite.position.x + boxes[box].sprite.width > mouseX) {
				if(boxes[box].sprite.position.y <= mouseY) {
					if(boxes[box].sprite.position.y + boxes[box].sprite.height > mouseY) {
						return boxes[box];
					}
				}		
			}
		}
	}
	return null;
}

// Toggle the highlight colour of a box.
function boxHightlight(box) {
	if(box.sprite.tint == 0xDEDEDE) {
		box.sprite.tint = 0xFF0000;
		box.sprite.tint = 0xFF0000;
	} else {
		box.sprite.tint = 0xDEDEDE;
	}
}

// React when a box is pressed.
function boxSelected(box) {
	if(currentlyPressed.indexOf(box.value) == -1) {
		currentlyPressed[currentlyPressed.length] = box.value;
		boxHightlight(box);
	}
}

function boxMouseDown(box) {
	mouseDown = true;
	boxSelected(box);
}

function boxMouseMove(box) {
	if(mouseDown && box != null) {
		boxSelected(box);	
	}
}

function boxMouseUp() {
	mouseDown = false;
	currentlyPressed = [];
}