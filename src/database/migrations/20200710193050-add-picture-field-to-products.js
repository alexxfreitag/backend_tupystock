module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'picture_id', {
      type: Sequelize.DataTypes.UUID,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'picture_id');
  },
};
