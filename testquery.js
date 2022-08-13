const { Account, Host, Client, sequelize } = require('./models')

async function run() {
	try {
		const client = await Client.create({ account_id: 1, room_id: null })
		console.log(client)
	} catch (error) {
		console.log(error)
	} finally {
		sequelize.close()
	}
}

run()
