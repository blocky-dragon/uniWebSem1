
const express = require('express');
const app = express();
const port = 3000;
server = app.listen(port)
const io = require('socket.io')(server);

app.set('view engine', 'pug');



app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.render('index');
});


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.username = "Anonymous"

  socket.on('change_username', (data) => {
    console.log("username changed")
    socket.username = data.username
  })

  socket.on('new_message', (data) => {
    console.log("new message")
    io.sockets.emit('new_message', {message : data.message, username : socket.username});
  })
})