import { Router } from 'express';

import productsRouter from '@modules/products/infra/http/routes/products.routes';

const routes = Router();

routes.get('/', (request, response)=>{
  return response.json("Index");
});

routes.use('/products', productsRouter);

export default routes;