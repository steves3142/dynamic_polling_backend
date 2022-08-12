const Router = require('express').Router()
const controller = require('../controllers/AnswerController')

Router.post('/submit/answer/:room_id', controller.submitAnswer)

module.exports = Router
