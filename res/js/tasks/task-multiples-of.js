var randomNumber = Math.round(Math.random()*9 + 1);

function MultiplesOfTask() {
    
}
   
MultiplesOfTask.prototype=new Task();

MultiplesOfTask.prototype.title = function() {
	return "Select all multiples of " + randomNumber + ".";
}

MultiplesOfTask.prototype.refresh = function() {
	randomNumber = Math.round(Math.random()*9 + 1);
}

MultiplesOfTask.prototype.check = function(number) {
	return number % randomNumber == 0;
}
