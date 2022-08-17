const Router = require('express').Router()
const controller = require('../controllers/AccountController')
const middleware = require('../middleware')

Router.get('/accounttype/:type/:user_id', controller.getAccountTypeInfoById)
Router.post('/submit/host', controller.CreateHost)
Router.post('/submit/client', controller.CreateClient)
Router.post('/login', controller.login)

Router.put(
	'/client/:client_id/:join_key',
	middleware.stripToken,
	middleware.verifyToken,
	controller.joinRoom
)
Router.get(
	'/session',
	middleware.stripToken,
	middleware.verifyToken,
	controller.checkSession
)

module.exports = Router
