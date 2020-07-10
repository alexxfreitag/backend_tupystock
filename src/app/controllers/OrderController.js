import { Op } from 'sequelize';

import Order from '../models/Order';
import User from '../models/User';
import Product from '../models/Product';
import ProductsOrder from '../models/ProductsOrder';

class OrderController {
  async index(req, res) {
    const orders = await Order.findAll({
      attributes: ['id', 'total_value'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });
    return res.json(orders);
  }

  async store(req, res) {
    const { products, user_id } = req.body;

    const productsIds = products.map((p) => p.product_id);

    const result = await Product.findAndCountAll({
      attributes: ['id', 'value'],
      where: {
        id: {
          [Op.in]: productsIds,
        },
      },
    });

    if (result.count !== productsIds.length)
      return res
        .status(400)
        .json({ error: 'Um dos produtos informados não existe.' });

    const resultPlusAmount = result.rows.map((item) => {
      const productIndex = products.findIndex(
        (product) => product.product_id === item.id
      );

      if (productIndex > -1) {
        return {
          product_id: item.id,
          amount: products[productIndex].amount,
          value: item.value,
        };
      }
    });

    const total_value = resultPlusAmount.reduce((acc, actualValue) => {
      const totalValue = actualValue.amount * actualValue.value;
      return acc + totalValue;
    }, 0);

    console.log({ user_id, total_value });

    const { id: order_id } = await Order.create({
      total_value,
      user_id,
    });

    const products_order = resultPlusAmount.map((product) => {
      return {
        product_id: product.product_id,
        order_id,
        product_total_value: product.amount * product.value,
        amount: product.amount,
      };
    });

    console.log(products_order);

    const response = await ProductsOrder.bulkCreate(products_order);

    return res.json(response);
  }
}

export default new OrderController();
