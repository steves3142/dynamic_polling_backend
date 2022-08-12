const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.post('/submit/question', controller.createQuestion)

Router.get('/pull/questions', controller.GetQuestions)

Router.delete('/delete/:question_id', controller.DeleteQuestion)

Router.put('/update/:question_id', controller.UpdateQuestion)

module.exports = Router