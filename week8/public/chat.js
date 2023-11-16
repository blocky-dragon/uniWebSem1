

var currentUserName = "Anonymous"

$(function(){
    var socket = io('http://localhost:3000');
    console.log("loaded I think")

    var message = $("#message")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")


    

    var usernameInput = $("#username_input");
    var changeUsername = $("#change_username");
    var userNameShower = $("#myUsername");

    usernameInput.hide();
    changeUsername.click(function(){
        usernameInput.show();
    });

    //loaders from storage
    var storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        currentUserName = storedUsername;
        userNameShower.text(currentUserName);
    }
    else{
        userNameShower.text(currentUserName);
    }
    


    usernameInput.keypress(function(event) {
        if (event.keyCode === 13) {
            var newUsername = usernameInput.val();
            if (newUsername !== "") {
                currentUserName = newUsername;
                sessionStorage.setItem('username', currentUserName);
                socket.emit('change_username', {username : currentUserName})
                usernameInput.hide();
                userNameShower.text(currentUserName);
            }
        }
    });

    send_message.click(function(){
        console.log(message.val())
        socket.emit('new_message', {message : message.val()})
        message.val('')
    })

    socket.on("new_message", (data) => {
        console.log(data)
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })



});
