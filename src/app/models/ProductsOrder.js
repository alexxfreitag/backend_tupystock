import Sequelize, { Model } from 'sequelize';

class ProductsOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        product_total_value: Sequelize.DOUBLE,
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

export default ProductsOrder;
