const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const HostRouter = require('./HostRouter')
const AccountRouter = require('./AccountRouter')
const RoomRouter = require('./RoomRouter')
const middleware = require('../middleware')

Router.use('/account', AccountRouter)

Router.get('/*', middleware.stripToken, middleware.verifyToken)
Router.put('/*', middleware.stripToken, middleware.verifyToken)
Router.delete('/*', middleware.stripToken, middleware.verifyToken)
Router.post('/*', middleware.stripToken, middleware.verifyToken)
Router.use('/student', StudentRouter)
Router.use('/host', HostRouter)
Router.use('/room', RoomRouter)

module.exports = Router
