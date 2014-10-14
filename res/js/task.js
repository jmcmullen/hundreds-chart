// Create the abstract Task object.
function Task() {
	// Initialisation for all Tasks
	this.refresh();
}

Task.prototype.check=function(number){
	// Check if the given number is allowed for this task.
}

Task.prototype.title=function(){
	// Get the title for the given task.
}

Task.prototype.refresh=function(){
	// Refresh the numbers for this task.
}


// Give the user a new task.
function startNewTask(id) {
	clearHighlighted();
	var tasks = [
		new EvenNumbersTask(), 
		new OddNumbersTask(), 
		new MultiplesOfTask(),
		new LowerThanTask(),
		new HigherThanTask(),
		new NumbersBetweenTask(),
		new PrimeNumbersTask(),
		new CompositeNumbersTask()
	];
	if(id == "?") {
		task = tasks[Math.round(Math.random()*tasks.length)];
	} else {
		task = tasks[id];	
	}
	task.refresh();
    $.sidr("close", "sidr");
	$(".task").html(task.title);
	setSelectedMenu("menu-challenge");
}

// Check if a task is complete.
function isTaskComplete() {
	for(var i = 1; i <= size; i++) {
		if($("#" + i).hasClass("wrong")) {
		   return false;
		}
		if(task.check(i) && $("#" + i).hasClass("right") == false) {
			return false
		}
	}
	return true;
}