// Import jQuery
import $ from 'jquery';

$(document).ready(function() {

    
    // Check if cookie exists
    if (!document.cookie) {
        // Add text to page
        $('body').append('<p>No cookie found!</p>');
    }

     // Add event listener to button
    $('#colorButton').click(function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $('#button').css('background-color', '#' + randomColor);
    });

});



