const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors')
let users = []
let messages = []

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello Gaes</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('user-connect', data => {
    console.log(data)
    users.push(data)
    io.emit('userConnected', users)
  })

  socket.on('sendAnswer', data => {
    console.log(data)
    messages.push(data)
    io.emit('sentAnswer', messages)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});