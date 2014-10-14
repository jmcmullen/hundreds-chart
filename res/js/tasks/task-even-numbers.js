function EvenNumbersTask() {
    
}
   
EvenNumbersTask.prototype=new Task();
EvenNumbersTask.prototype.title="Select all even numbers.";

EvenNumbersTask.prototype.refresh = function() {
	
}

EvenNumbersTask.prototype.check = function(number) {
	return number % 2 == 0;
}
