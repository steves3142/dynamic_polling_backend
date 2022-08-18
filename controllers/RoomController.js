const { response } = require('express')
const { UUID } = require('sequelize')
const ShortUniqueId = require('short-unique-id')
const { Room } = require('../models')

const CreateRoom = async (req, res) => {
	try {
		const uid = new ShortUniqueId({ length: 8 })
		let joinKey = uid()
		let roomJoinKeys = await Room.findAll({
			attributes: ['join_key'],
			raw: true,
		})
		let roomBody = {
			...req.body,
			join_key: joinKey,
		}
		roomJoinKeys = roomJoinKeys.map((key) => key.join_key)
		console.log(roomJoinKeys)
		while (roomJoinKeys.includes(joinKey)) {
			joinKey = uid()
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
		const roomList = await Room.findAll({
			where: { owner_id: ownerId },
			raw: true,
		})
		console.log(roomList)
		res.status(200).json(roomList)
	} catch (error) {
		res.status(400).json({ error: error })
	}
}

const getRoomById = async (req, res) => {
	try {
		console.log('correct route')
		let room = await Room.findByPk(parseInt(req.params.id))
		if (room) {
			res.status(200).json(room)
		} else {
			throw 'No Room Found'
		}
	} catch (error) {
		res.status(404).json(error)
	}
}

module.exports = { CreateRoom, getRoomByOwnerId, getRoomById }
