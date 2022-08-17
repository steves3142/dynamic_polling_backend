const Router = require('express').Router()
const controller = require('../controllers/RoomController')

Router.post('/submit', controller.CreateRoom)
Router.get('/rooms/:owner_id', controller.getRoomByOwnerId)
Router.get('/rooms/id/:id', controller.getRoomById)

module.exports = Router
