const { getIO } = require('../utils/socket')
const middleware = require('../middleware')
const { Account, Host, Client } = require('../models')

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
		const client = Client.create({ account_id: account.id })
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
			}
			let token = middleware.createToken(payload)
			return res.send({ user: payload, token })
		}
		res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
	} catch (error) {
		throw error
	}
}

module.exports = {
	CreateHost,
	CreateClient,
	login,
}
