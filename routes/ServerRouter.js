const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const HostRouter = require('./HostRouter')
const AccountRouter = require('./AccountRouter')

Router.use('/student', StudentRouter)

Router.use('/host', HostRouter)

Router.use('/account', AccountRouter)

module.exports = Router
