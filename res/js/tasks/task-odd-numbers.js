function OddNumbersTask() {
    
}
   
OddNumbersTask.prototype=new Task();
OddNumbersTask.prototype.title="Select all odd numbers.";


OddNumbersTask.prototype.refresh=function(){
	// Refresh the numbers for this task.
}

OddNumbersTask.prototype.check = function(number) {
	return number % 2 != 0;
}
