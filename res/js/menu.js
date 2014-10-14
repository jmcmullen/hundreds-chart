// Set a menu item as selected
function setSelectedMenu(id) {
	// If the given id is already active then do nothing.
	if($("#" + id).hasClass("active")) {
		return;	
	}
	// For each menu item.
	$(".main-menu li").each(function() {
		if($(this).attr("id") != id) {
			// Fold it down and make it inactive.
			$(this).removeClass("active");
			$("#" + $(this).attr("id") + " .dropdown").slideUp();
		}
	});
	// Now change the new menu to active.
	$("#" + id).addClass("active");
	$("#" + id + " .dropdown").slideDown(function() {
		// Scroll to the selected menu.
		$(".main-menu").animate({
        	scrollTop: $("#" + id).offset().top
    	}, 500);
	});
	if(id == "menu-freestyle") {
		task = null;
	}	
}