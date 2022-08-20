const { Answer } = require('../models')
const { getIO } = require('../utils/socket')

const submitAnswer = async (req, res) => {
	try {
		let roomId = parseInt(req.params.room_id)
		const answer = await Answer.create(req.body)
		getIO().to(roomId).emit('new-answer', answer)
		res.status(200).json(answer)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

module.exports = { submitAnswer }
//STeve