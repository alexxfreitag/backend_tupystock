import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name } = await User.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    /* const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
    }); */
  }
}

export default new UserController();
