import { Router } from 'express';

import UserController from './app/controllers/UserController';
import OrderController from './app/controllers/OrderController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'routes test' });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.post('/sessions', SessionController.store);
routes.get('/products', ProductController.index);

export default routes;
