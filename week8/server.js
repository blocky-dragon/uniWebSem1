
const express = require('express');
const app = express();
const port = 3000;
const io = require('socket.io')(port);

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});