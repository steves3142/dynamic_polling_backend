const { getIO } = require('../utils/socket')
const io = getIO()
const { Account } = require('../models')

const CreateHost = async (req, res) => {
    try {
        let accountBody = {
            ...req.body
        }
        const hostAccount = await Account.create(accountBody)
        res.send(hostAccount)
    } catch (error) {
        console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
    }
}

const CreateClient = async (req, res) => {
    try {
        let accountBody = {
            ...req.body
        } 
        const clientAccount = await Account.create(accountBody)
        res.send(clientAccount)
    } catch (error) {
        console.log(error)
		res.status(400).json({ error: 'Something went wrong' })
    }
}

module.exports = {
    CreateHost,
    CreateClient
}