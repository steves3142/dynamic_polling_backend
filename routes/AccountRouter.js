const Router = require('express').Router()
const controller = require('../controllers/AccountController')
const middleware = require('../middleware')

Router.put('/client/:client_id/:join_key', controller.joinRoom)
Router.post('/login', controller.login)
Router.get(
	'/session',
	middleware.stripToken,
	middleware.verifyToken,
	controller.checkSession
)

Router.get('/accounttype/:type/:user_id', controller.getAccountTypeInfoById)
Router.post('/submit/host', controller.CreateHost)
Router.post('/submit/client', controller.CreateClient)



module.exports = Router
