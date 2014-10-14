var randomNumberOne = Math.round(Math.random()*90 + 5);
var randomNumberTwo = randomNumberOne + Math.round(Math.random()*(99 - randomNumberOne));

function NumbersBetweenTask() {
    
}
   
NumbersBetweenTask.prototype=new Task();

NumbersBetweenTask.prototype.refresh = function() {
	randomNumberOne = Math.round(Math.random()*90 + 5);
	randomNumberTwo = randomNumberOne + Math.round(Math.random()*(99 - randomNumberOne)) + 1;
}

NumbersBetweenTask.prototype.title = function() {
	return "Select all numbers between " + randomNumberOne + " and " + randomNumberTwo + ".";
}

NumbersBetweenTask.prototype.check = function(number) {
	return number > randomNumberOne && number < randomNumberTwo;
}
