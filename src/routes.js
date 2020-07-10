import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import OrderController from './app/controllers/OrderController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import ProductsOrderController from './app/controllers/ProductsOrderController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  return res.json({ message: 'backend rodando :)' });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.post('/sessions', SessionController.store);
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products_order', ProductsOrderController.index);
routes.get('/files', FileController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
