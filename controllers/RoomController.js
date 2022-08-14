const { Room } = require('../models')
const { getIO } = require('../utils/socket')
const io = getIO()

const CreateRoom = async (req, res) => {
	try {
		let roomBody = {
			...req.body,
		}
		const newRoom = await Room.create(roomBody)
		res.send(newRoom)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error })
	}
}

const getRoomByOwnerId = async (req, res) => {
	try {
		let ownerId = parseInt(req.params.owner_id)
		const roomList = await Room.findAll({ where: { id: ownerId } })
		res.status(200).json(roomList)
	} catch (error) {
		res.status(400).json({ error: error })
	}
}

module.exports = { CreateRoom, getRoomByOwnerId }
