const { Question, Choice } = require('../models')
const { getIO } = require('../utils/socket')
const { Op } = require('sequelize')

const createQuestion = async (req, res) => {
	try {
		let room_id = parseInt(req.params.room_id)
		let questionBody = {
			...req.body.question,
		}

		let question = await Question.create(questionBody)
		let createdChoices = []
		if (questionBody.type == 'MC') {
			let choices = [...req.body.choices]
			for (const choice of choices) {
				let option = await Choice.create({
					question_id: question.id,
					choice: choice.choice,
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
			order: [['createdAt', 'DESC']],
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
		let updatedChoices = []
		if (req.body.question.type == 'MC') {
			let choices = req.body.choices
			for (const choice of choices) {
				let update = await Choice.update(
					{ choice: choice.choice },
					{
						where: {
							id: choice.id,
						},
						returning: true,
					}
				)
				updatedChoices.push(update)
			}
		}
		updatedChoices = updatedChoices.map((obj) => obj[1][0])
		let updatedQuestion = await Question.update(req.body.question, {
			where: { id: questionId },
			returning: true,
		})
		updatedQuestion = updatedQuestion[1][0]
		getIO().to(updatedQuestion.room_id).emit('updated-question', {
			question: updatedQuestion,
			choices: updatedChoices,
		})
		res.json({ question: updatedQuestion, choices: updatedChoices })
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

const getQuestionById = async (req, res) => {
	try {
		let question = await Question.findByPk(parseInt(req.params.id), {
			include: ['answers', 'choices'],
		})
		console.log(question)
		if (question) {
			res.json(question)
		} else {
			throw 'No Question Found'
		}
	} catch (error) {
		console.log(error)
		res.status(404).json({ error })
	}
}

module.exports = {
	createQuestion,
	GetQuestions,
	UpdateQuestion,
	DeleteQuestion,
	getQuestionById,
}
