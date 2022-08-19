const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const { init, getIO } = require('./utils/socket')

const ServerRouter = require('./routes/ServerRouter')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
init(server)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', ServerRouter)

getIO().on('connection', (socket) => {
	console.log(`User ${socket.id} connected`)

	socket.on('join-room', (roomId) => {
		console.log(`${socket.id} is joining room: ${roomId}`)
		socket.join(roomId)
	})

	socket.on('send-message', (message) => {
		console.log(message)
		getIO().to(message.room_id).emit('receive-message', message)
	})

	socket.on('room-announce', (data) => {
		console.log(data.message)
		console.log(data.room.id)
		getIO().to(data.room.id).emit('room-announcement', data.message)
	})

	socket.on('close-room', (roomId) => {
		getIO().to(roomId).emit('close-submission')
	})

	//for Testing with buttons can remove
	socket.on('newAnswer', (data) => {
		console.log('recieved answer', data.answer)
		getIO().to(10).emit('new-answer', data.answer)
	})

	socket.on('disconnect', () => {
		console.log(`User ${socket.id} disconnect`)
	})
})

server.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
