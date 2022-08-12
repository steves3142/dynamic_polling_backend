const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.post('/login', controller.login)
Router.post('/submit/host', controller.CreateHost)
Router.post('/submit/client', controller.CreateClient)

module.exports = Router
