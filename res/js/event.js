// Register all our events.
function registerEvents() {
	
	// While the mouse is down allow boxes to be toggled.
	$('.box').on('touchstart mousedown', function(){
		// Tell the activity that the mouse is down.
		mouseDown = true;
		// Tell the activity this box was clicked.
		boxClick($(this).attr("id"));
	});

	// When the mouse is released stop boxes from being toggled.
	$('.box').on('touchend mouseup', function(){
		// Tell the activity the mouse has been released.
		mouseDown = false;
		// After 300ms allow the modified boxes to be clicked again.
		setTimeout(function(){
			currentlyPressed = [];
		}, 300);
	});

	// While the mouse or finger is held down...
	$('.box').on('touchmove mouseover', function(){
		// If the mouse is down
		if(mouseDown) {
			// Check if there is a touch screen.
			if(event.touches == null) {
				// There is no touch screen so use the mouse positions.
				var box = document.elementFromPoint(event.clientX, event.clientY);
			} else {
				// There is a touch screen so use it.
				var box = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY);
			}
			// Tell the activity the box was clicked.
			boxClick($(box).attr("id"));
		}
	});
	
}