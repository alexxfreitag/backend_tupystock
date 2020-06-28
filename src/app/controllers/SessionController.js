import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { name, password } = req.body;

    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // checa se a senha informada bate com a senha criptografada do usuario
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Usuário ou senha incorreto.' });
    }

    const { id } = user;

    return res.json({ id, name });
  }
}

export default new SessionController();
