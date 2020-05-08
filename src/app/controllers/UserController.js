import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { name: req.body.name } });
    if (userExists)
      return res
        .status(400)
        .json({ error: 'Já existe um usuário com esse nome.' });

    const { id, name } = await User.create(req.body);

    return res.json({ id, name });
  }
}

export default new UserController();
