var randomNumber = Math.round(Math.random()*90 + 5);

function LowerThanTask() {
	
}
   
LowerThanTask.prototype=new Task();

LowerThanTask.prototype.refresh = function() {
	randomNumber = Math.round(Math.random()*90 + 5);
}

LowerThanTask.prototype.title = function() {
	return "Select all numbers lower than " + randomNumber + ".";
}

LowerThanTask.prototype.check = function(number) {
	return number < randomNumber;
}
