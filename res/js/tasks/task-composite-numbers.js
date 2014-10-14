// Checks whether an int is prime or not.
function isPrime(n) {
    // Check if n is a multiple of 2
    if (n%2==0) return false;
    // If not, then just check the odds
    for(var i=3;i*i<=n;i+=2) {
        if(n%i==0)
            return false;
    }
    return true;
}

function CompositeNumbersTask() {
    
}
   
CompositeNumbersTask.prototype=new Task();
CompositeNumbersTask.prototype.title="Select all composite numbers.";

CompositeNumbersTask.prototype.refresh = function() {
	
}

CompositeNumbersTask.prototype.check = function(number) {
	return !isPrime(number);
}
