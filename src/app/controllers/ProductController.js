import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    console.log('teste');
    const products = await Product.findAll();
    console.log(products);
    return res.json(products);
  }

  /* async store(req, res) {
    const userExists = await User.findOne({ where: { name: req.body.name } });
    if (userExists)
      return res
        .status(400)
        .json({ error: 'Já existe um usuário com esse nome.' });

    const { id, name } = await User.create(req.body);

    return res.json({ id, name });
  } */
}

export default new ProductController();
