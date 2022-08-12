const Router = require('express').Router()
const controller = require('../controllers/AnswerController')

Router.post('/submit/answer', controller.submitAnswer)

module.exports = Router
