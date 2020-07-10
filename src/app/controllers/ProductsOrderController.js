import ProductsOrder from '../models/ProductsOrder';
import Product from '../models/Product';

class ProductsOrderController {
  async index(req, res) {
    const productsOrders = await ProductsOrder.findAll({
      attributes: ['id', 'product_total_value', 'amount', 'order_id'],
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['id', 'description', 'value', 'category', 'active'],
        },
      ],
    });
    return res.json(productsOrders);
  }

  /* async store(req, res) {
    const { product_id, amount } = req.body;
    const product = await Product.findOne({
      where: { id: product_id },
    });

    if (!product)
      return res.status(400).json({ error: 'Produto inexistente.' });

    const { value } = product;
    const product_total_value = value * amount;

    const result = await ProductsOrder.create({
      product_id,
      product_total_value,
      amount,
    });

    return res.json(result);
  } */
}

export default new ProductsOrderController();
