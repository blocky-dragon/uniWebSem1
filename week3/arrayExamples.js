


var testArray = ["apple", "orange", "banana"];
var testArray2 = ["apple2", "orange2", "banana2"];

console.log(testArray);
console.log(testArray2);

//splice is better than delete - see below

delete testArray[1];
console.log(testArray);

//first arg is which to remove, last arg is how many to remove
testArray2.splice(1, 1);
console.log(testArray2);
