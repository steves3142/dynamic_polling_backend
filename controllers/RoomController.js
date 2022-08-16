const { UUID } = require('sequelize');
const ShortUniqueId = require('short-unique-id');
const { Room } = require('../models')
const { getIO } = require('../utils/socket')
const io = getIO()



const CreateRoom = async (req, res) => {
	try {
		const uid = new ShortUniqueId({length: 8});
		
		let joinKey = uid(); 
		let unique = true;
		const roomJoinKeys = await Room.findAll({
			attributes: ['join_key']
		})
		let roomBody = {
			...req.body,
			join_key: joinKey,
		}
		console.log(joinKey)
		console.log(roomJoinKeys) //estimate of collision 
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
		const roomList = await Room.findAll({ where: { owner_id: ownerId } })
		res.status(200).json(roomList)
	} catch (error) {
		res.status(400).json({ error: error })
	}
}

module.exports = { CreateRoom, getRoomByOwnerId }
