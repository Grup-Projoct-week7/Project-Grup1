const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors');
const PORT = process.env.PORT || 3000
const io = require('socket.io')(http)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let users=[]
let messages = []
let ready = 0
let answers = []
io.on('connection', (socket) => {
    console.log('connect new user');

    socket.on('userLogin', (data) => {
        users.push(data)
        console.log(users);

        io.emit('USER-SUCCESS-LOGIN', users)
    })

    socket.on('sendMessage', data => {
        messages.push(data)
        io.emit('CHAT-USER', messages)
        console.log(messages);
    })

    socket.on('sendAnswer', data => {
        console.log(data)
        answers.push(data)
        io.emit('sentAnswer', answers)
      })

    socket.on('startGame', data => { 
        console.log('start game')
        io.emit('CHANGE-PLAY')
    })
    socket.on('readyCheck', data => { 
        ready = ready + data
        console.log(ready);
        io.emit('PLAYER-READY', ready)
    })

    socket.on('disconnect', () => {
        console.log();
        // socket.rooms === {}
        console.log('dc');
      });
})


http.listen(PORT, () => {
    console.log(`app masuk sini ni ${PORT}`);
})
