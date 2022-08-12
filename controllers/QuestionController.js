const { getIO } = require('../utils/socket')
const io = getIO()
const { Question } = require('../models')


const createQuestion = async (req, res) => {
	try {
        let questionBody = {
            ...req.body
        }
        let question = await Question.create(questionBody)
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
        const updatedQuestion = await Question.update(req.body, {
            where: { id: questionId },
            returning: true
        })
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
            where: { id: questionId }
        })
        res.json({message: `Deleted question with ID of ${questionId}`})
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Something went wrong' })
    }
}


module.exports = { 
    createQuestion,
    GetQuestions,
    UpdateQuestion,
    DeleteQuestion
}
