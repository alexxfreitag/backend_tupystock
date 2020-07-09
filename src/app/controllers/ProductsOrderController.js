import ProductsOrder from '../models/ProductsOrder';

class ProductsOrderController {
  async index(req, res) {
    const productsOrders = await ProductsOrder.findAll();
    return res.json(productsOrders);
  }

  /* async store(req, res) {
    const { description } = req.body;
    const productExists = await Product.findOne({ where: { description } });
    if (productExists)
      return res
        .status(400)
        .json({ error: 'Já existe um produto com essa descrição.' });

    const result = await Product.create(req.body);

    return res.json(result);
  } */
}

export default new ProductsOrderController();
