const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const HostRouter = require('./HostRouter')
const AccountRouter = require('./AccountRouter')
const RoomRouter = require('./RoomRouter')

Router.use('/student', StudentRouter)

Router.use('/host', HostRouter)

Router.use('/account', AccountRouter)

Router.use('/room', RoomRouter)

module.exports = Router
