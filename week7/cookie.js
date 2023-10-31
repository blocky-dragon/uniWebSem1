
function setCookie(cname, cvalue, exdays) {
    exdays = exdays * 10000
    document.cookie = cname + "=" + cvalue + ";" + exdays + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function() {

    
    // Check if cookie exists
    if (!document.cookie) {
        // Add text to page
        $('body').append('<p>No cookie found!</p>');
    }
    else{
        // Add text to page
        $('body').append('<p>Cookie found!</p>');
        // Get cookie
        var color = getCookie('color');
        // Set background color
        $('body').css('background-color', '#' + color);
        console.log("loaded :" + color);
    }

     // Add event listener to button
    $('#colorButton').click(function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $('body').css('background-color', '#' + randomColor);
        setCookie('color', randomColor, 7);
        console.log("saved :" + randomColor);
    });

});