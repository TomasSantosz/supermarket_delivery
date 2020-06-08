import { Router } from 'express';
import ProductsController from '../controllers/ProductsController'

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/',(request, response) => {
  return response.json({ message: 'Hello World'});
});
productsRouter.post('/add', productsController.create)

export default productsRouter;