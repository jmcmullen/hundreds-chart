// Draw the table with the rows specified.
function createHundredsChart(rows) {
	// Store the size of the board globally.
	size = rows * 10;
	// Remove the previous chart.
	$(".chart").html("");
	// Remove the current task.
	$(".task").html("");
	task = null;
	// Close the menu if it is open.
	$.sidr("close", "sidr");
	// Add each box to the chart.
    var count = 1;
    for (var i = 0; i < rows; i ++) {
        $(".chart").append("<tr>");
        for(var j = 0; j < 10; j ++) {
            $(".chart").append(
                "<td " + "class='box'" + 
                "id='" + count + "'>" + 
				count + "</td>"
            );
            count ++;
        }
        $(".chart").append("</tr>");
    }
	// Adjust the box sizes so they fill the screen.
	resizeBoxes();
	// Animate the boxes on to the screen.
	animateBoxes();
	// Register touch events for the new boxes.
	registerEvents();
}

// Resize boxes properlly.
function resizeBoxes() {
	$(".box").css({ 
		height: ($(window).height() - 66) / (size / 10)
	});
}

// Animate the boxes onto the board.
function animateBoxes() {
	var row = 0;
	for(var x = 1; x <= (size / 10); x ++) {
		for(var y = 1; y <= 10; y ++) {
			var id = (row * 10) + y;
			$("#" + id).delay(25 * (y + row))
			.animate({ opacity: 1 },  500);
		}
		row ++;
	}
}

// Handle highlighting a box.
function highlightBox(id) {
	var removed = 0;
	colours.forEach(function(colour) {
		if($("#" + id).hasClass(colour)) {
			$("#" + id).removeClass(colour);	
			removed ++;
		}
	});
	if(removed == 0) {
		$("#" + id).addClass(highlight);
	}
}

// Change the highlight colour.
function setHighlight(colour) {
    $.sidr("close", "sidr");
	$("body").removeClass(highlight);
	highlight = colour;
	$("body").addClass(highlight);
}

// Clear all highlighted boxes.
function clearHighlighted() {
	for(var i = 1; i <= size; i ++) {
		colours.forEach(function(colour) {
			$("#" + i).removeClass(colour);
		});
		$("#" + i).removeClass("right");
		$("#" + i).removeClass("wrong");
	}
}

// Highlight all boxes that are multiples of the given number.
function highlightMultiples(number) {
	task = null;
	clearHighlighted();
    $.sidr("close", "sidr");
	for(var i = 1; i <= size; i ++) {
		if(i % number == 0) {
			highlightBox(i);
		}
	}
    $(".task").html("Showing multiples of " + number);
}

// React when a box is clicked.
function boxClick(box) {
	if($.inArray(box, currentlyPressed) <= -1) {
		currentlyPressed[currentlyPressed.length] = box;
		if(task != null) {
			if(task.check(box) == true) {
				$("#" + box).toggleClass("right");   
			} else {
				$("#" + box).toggleClass("wrong");
			}
			if(isTaskComplete()) {
				$(".task").html("Complete!");	
			}
		} else {
			setSelectedMenu("menu-freestyle");
			highlightBox(box);
			//$(".task").html("");
		}
	}
	$.sidr("close", "sidr");
	
}