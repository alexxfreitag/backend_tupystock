import Order from '../models/Order';
import User from '../models/User';

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
    console.log(req.body);
    const { id, user_id, total_value } = await Order.create(req.body);

    return res.json({ id, user_id, total_value });
  }
}

export default new OrderController();
