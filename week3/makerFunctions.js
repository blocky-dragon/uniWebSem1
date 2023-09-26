


function makerBase(size, colour, price){
    var exampleObject = {} // empty object
    exampleObject.size = size;
    exampleObject.colour = colour;
    exampleObject.price = price;
    return exampleObject;
}


function makerDiscount(size, colour, price, discount){
    var exampleObject = {} // empty object
    exampleObject.size = size;
    exampleObject.colour = colour;
    exampleObject.price = price;
    exampleObject.discount = discount;
    exampleObject.displayDiscount = function(){
        return this.price * this.discount;
    }
    return exampleObject;
}


var shoe1 = makerBase("10", "red", 50);

console.log(shoe1);

var shoe2 = makerDiscount("10", "red", 50, 0.5);

console.log(shoe2.displayDiscount());