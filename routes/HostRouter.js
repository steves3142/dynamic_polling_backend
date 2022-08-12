const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.post('/submit/question/:room_id', controller.createQuestion)

Router.get('/pull/questions', controller.GetQuestions)

Router.delete('/delete/:question_id', controller.DeleteQuestion)

Router.put('/update/:question_id/:room_id', controller.UpdateQuestion)


Router.post('/submit/choices', controller.CreateChoices)

module.exports = Router

