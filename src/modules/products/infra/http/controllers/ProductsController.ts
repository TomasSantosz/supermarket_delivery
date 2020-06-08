import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response>{
    const { 
      nome, 
      descricao, 
      quantidade, 
      preco, 
      promocao, 
      preco_promocao, 
      ativo} = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      nome, 
      descricao, 
      quantidade, 
      preco, 
      promocao, 
      preco_promocao, 
      ativo
    });
    return response.json(product);
  }
}