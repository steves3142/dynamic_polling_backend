const { Room } = require('../models')
const { getIO } = require('../utils/socket')
const io = getIO()

const CreateRoom = async (req, res) => {
    try {
        let roomBody = {
            ...req.body
        }
        const newRoom = await Room.create(roomBody)
        res.send(newRoom)
    } catch (error) {
        console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
    }
}

module.exports = { CreateRoom }