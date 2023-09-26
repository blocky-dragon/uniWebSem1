
var banana = new Object();
banana.color = "yellow";
banana.daysOld = 7;

banana.isYucky = function() {
    if (this.daysOld > 5) {
        return true;
    } else {
        return false;
    }
}

console.log(banana.isYucky());


