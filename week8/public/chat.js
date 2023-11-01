
var socket = io();

var randomUsername = ""

$(function(){
    var socket = io('http://localhost:3000');
    console.log("loaded I think")

    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")


    

    username.click(function(){
        randomUsername = Math.random().toString(36).substring(7);
        console.log(randomUsername)
        socket.emit('change_username', {username : randomUsername})
    })

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
