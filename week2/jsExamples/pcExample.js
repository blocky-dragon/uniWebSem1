//creates a new instance of the pcExample class - using node.js so we can use the require() function
const Pc = require('./pcClass.js');


const pcExample = new Pc('Intel Core i7', 'Nvidia GeForce RTX 3080', '16GB DDR4');

console.log(pcExample.cpu); // Output: Intel Core i7