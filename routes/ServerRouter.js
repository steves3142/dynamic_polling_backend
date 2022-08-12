const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const HostRouter = require('./HostRouter')

Router.use('/student', StudentRouter)

Router.use('/host', HostRouter)


module.exports = Router
