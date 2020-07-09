import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }

  async store(req, res) {
    const { description } = req.body;
    const productExists = await Product.findOne({ where: { description } });
    if (productExists)
      return res
        .status(400)
        .json({ error: 'Já existe um produto com essa descrição.' });

    const result = await Product.create(req.body);

    return res.json(result);
  }
}

export default new ProductController();
