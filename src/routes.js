import { Router } from 'express';

import UserController from './app/controllers/UserController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'routes test' });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/orders', OrderController.store);

export default routes;
