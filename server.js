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
	socket.on('send-message', (message) => {
		getIO().emit('receive-message', message)
	})

	socket.on('disconnect', () => {
		console.log(`User ${socket.id} disconnect`)
	})
})

server.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))