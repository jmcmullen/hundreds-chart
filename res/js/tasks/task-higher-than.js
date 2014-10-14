var randomNumber = Math.round(Math.random()*90 + 5);

function HigherThanTask() {
	
}
   
HigherThanTask.prototype=new Task();

HigherThanTask.prototype.refresh = function() {
	randomNumber = Math.round(Math.random()*90 + 5);
}

HigherThanTask.prototype.title = function() {
	return "Select all numbers greater than " + randomNumber + ".";
}

HigherThanTask.prototype.check = function(number) {
	return number > randomNumber;
}
