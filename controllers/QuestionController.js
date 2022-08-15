const { getIO } = require('../utils/socket')
const { Question, Choice } = require('../models')
const { Op } = require('sequelize')

const createQuestion = async (req, res) => {
	try {
		let room_id = parseInt(req.params.room_id)
		let questionBody = {
			...req.body.question,
		}
		let choices = [...req.body.choices]
		let question = await Question.create(questionBody)
		let createdChoices = []
		if (questionBody.type == 'MC') {
			for (const choice of choices) {
				let option = await Choice.create({
					question_id: question.id,
					choice: choice,
				})
				createdChoices.push(option)
			}
		}
		getIO()
			.to(room_id)
			.emit('new-question', { question: question, choices: createdChoices })
		res.json({ question: question, choices: createdChoices })
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error })
	}
}

const GetQuestions = async (req, res) => {
	try {
		let room_id = parseInt(req.params.room_id)
		let from = new Date(req.body.range.from)
		let to = new Date(req.body.range.to)
		console.log(from)
		const questions = await Question.findAll({
			where: {
				room_id: room_id,
				createdAt: {
					[Op.between]: [from.toISOString(), to.toISOString()],
				},
			},
			include: ['choices', 'answers'],
		})
		res.json(questions)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

const UpdateQuestion = async (req, res) => {
	try {
		let questionId = parseInt(req.params.question_id)
		let room_id = parseInt(req.params.room_id)
		const updatedQuestion = await Question.update(req.body, {
			where: { id: questionId },
			returning: true,
		})
		getIO().to(room_id).emit('updated-question', question)
		res.json(updatedQuestion)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

const DeleteQuestion = async (req, res) => {
	try {
		let questionId = parseInt(req.params.question_id)
		const deletedQuestion = await Question.destroy({
			where: { id: questionId },
		})
		res.json({ message: `Deleted question with ID of ${questionId}` })
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

module.exports = {
	createQuestion,
	GetQuestions,
	UpdateQuestion,
	DeleteQuestion,
}
