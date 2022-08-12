const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')

Router.use('/student', StudentRouter)

module.exports = Router
