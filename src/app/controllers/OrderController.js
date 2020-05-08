import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const { id, user_id, total_amount } = await Order.create(req.body);

    return res.json({ id, user_id, total_amount });
  }
}

export default new OrderController();
