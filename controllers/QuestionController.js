const { getIO } = require('../utils/socket')
const io = getIO()
const { Question, Choice } = require('../models')

const createQuestion = async (req, res) => {
	try {
		let room_id = parseInt(req.params.room_id)
		let questionBody = {
			...req.body,
		}
		let question = await Question.create(questionBody)
		getIO().to(room_id).emit('new-question', question)
		res.json(question)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
	}
}

const GetQuestions = async (req, res) => {
	try {
		const questions = await Question.findAll()
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


const CreateChoices = async (req, res) => {
    try {
        let choiceBody = {
            ...req.body
        }
        let choices = await Choice.create(choiceBody)
        res.json(choices)
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
    CreateChoices
}
