document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(event) {
        var password = document.getElementById('pwd').value;
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
        }
    });
});


console.log("passwordChecker.js loaded");