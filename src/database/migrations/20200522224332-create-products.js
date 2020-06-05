module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('products', {
          id: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          value: {
            type: Sequelize.DOUBLE,
            allowNull: false,
          },
          category: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        });
      });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('products');
  },
};
