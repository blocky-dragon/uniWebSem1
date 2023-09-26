

// var and let have different scope


// var is function scoped
// let is block scoped

function testFunction(){
    let x = 5;
    if (true){
        let x = 10;
        console.log("x = " + x);
    }
    console.log("x = " + x);

    var y = 5;
    if (true){
        var y = 10;
        console.log("y = " + y);
    }
    console.log("y = " + y);

}

testFunction();