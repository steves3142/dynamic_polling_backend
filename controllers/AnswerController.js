// const { Answer } = require('../models')
const { getIO } = require('../utils/socket')
const io = getIO()

const submitAnswer = async (req, res) => {
	try {
		//TODO: create answer and link to db
		// const answer = await Answer.create(req.body)
		res.status(200).json(req.body)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

module.exports = { submitAnswer }
