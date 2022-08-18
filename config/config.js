require('dotenv').config()

module.exports = {
	development: {
		database: 'dynamic_polling',
		dialect: 'postgres',
	},
	test: {
		database: 'dynamic_polling_test',
		dialect: 'postgres',
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
				require: true,
			},
		},
	},
}
