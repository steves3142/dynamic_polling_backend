const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.post('/submit/question/:room_id', controller.createQuestion)

Router.post('/pull/questions/:room_id', controller.GetQuestions)

Router.delete('/delete/:question_id', controller.DeleteQuestion)

Router.put('/update/:question_id', controller.UpdateQuestion)

module.exports = Router
