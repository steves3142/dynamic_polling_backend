const Router = require('express').Router()
const controller = require('../controllers/RoomController')

Router.post('/submit', controller.CreateRoom)

module.exports = Router