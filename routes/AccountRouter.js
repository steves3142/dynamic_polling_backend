const Router = require('express').Router()
const controller = require('../controllers/AccountController')
const middleware = require('../middleware')

Router.post('/login', controller.login)
Router.get(
	'/session',
	middleware.stripToken,
	middleware.verifyToken,
	controller.checkSession
)
Router.post('/submit/host', controller.CreateHost)
Router.post('/submit/client', controller.CreateClient)

module.exports = Router
