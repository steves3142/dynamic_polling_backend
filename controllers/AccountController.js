const middleware = require('../middleware')
const { Account, Host, Client, Room } = require('../models')
const { response } = require('express')

const CreateHost = async (req, res) => {
	try {
		const { email, password, type } = req.body
		let passwordDigest = await middleware.hashPassword(password)
		let accountBody = {
			email,
			passwordDigest: passwordDigest,
			type: type,
		}
		const account = await Account.create(accountBody)
		const host = await Host.create({ account_id: account.id })
		res.send({ account, host })
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error })
	}
}

const CreateClient = async (req, res) => {
	try {
		const { email, password, type } = req.body
		let passwordDigest = await middleware.hashPassword(password)
		let accountBody = {
			email,
			passwordDigest: passwordDigest,
			type: type,
		}
		const account = await Account.create(accountBody)
		const client = await Client.create({ account_id: account.id })
		res.send({ account, client })
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error })
	}
}

const login = async (req, res) => {
	try {
		const user = await Account.findOne({
			where: { email: req.body.email },
			raw: true,
		})
		if (
			user &&
			(await middleware.comparePassword(user.passwordDigest, req.body.password))
		) {
			let payload = {
				id: user.id,
				email: user.email,
				type: user.type,
			}
			let token = middleware.createToken(payload)
			return res.send({ user: payload, token })
		}
		res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
	} catch (error) {
		throw error
	}
}

const checkSession = async (req, res) => {
	const { payload } = res.locals
	console.log(payload)
	res.send({ user: payload })
}

const getAccountTypeInfoById = async (req, res) => {
	const type = req.params.type
	const accountId = req.params.user_id
	try {
		if (type == 'host') {
			const host = await Host.findOne({ where: { account_id: accountId } })
			if (host) {
				return res.status(200).json(host)
			}
		} else {
			const client = await Client.findOne({ where: { account_id: accountId } })
			if (client) {
				return res.status(200).json(client)
			}
		}
		return res.status(404).json('no linked accouunt type info')
	} catch (error) {
		res.status(401).send({ error })
	}
}

const joinRoom = async (req, res) => {
	try {
		const specificRoom = await Room.findOne({
			where: { join_key: req.params.join_key },
			raw: true,
		})
		if (specificRoom) {
			const client = await Client.update(
				{ room_id: specificRoom.id },
				{
					returning: true,
					where: { id: parseInt(req.params.client_id) },
				}
			)
			res.json(client)
		} else {
			res.status(404).json({ message: 'Room not found' })
		}
	} catch (error) {
		res.status(401).json(error)
	}
}

module.exports = {
	CreateHost,
	CreateClient,
	login,
	checkSession,
	getAccountTypeInfoById,
	joinRoom,
}
