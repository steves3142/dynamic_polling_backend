'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
      owner_id: {
				type: DataTypes.INTEGER,
        allowNull: false,
				references: {
					model: 'hosts',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				}
      },
       subject_name: {
        type: Sequelize.STRING
      },
      createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  }
};
