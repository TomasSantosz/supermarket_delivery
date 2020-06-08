import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductsDTO from '@modules/products/dtos/ICreateProductsDTO';
import Product from '../entities/Products';

export default class ProductsRepository implements IProductsRepository{
  private ormRepository: Repository<Product>

  constructor(){
    this.ormRepository = getRepository(Product);
  }

  public async findByName(nome: string): Promise<Product | undefined>{
    const findProduct = await this.ormRepository.findOne({
      where: {nome},
    });
    return findProduct;
  }

  public async create({
    nome,
    descricao,
    preco,
    quantidade,
    promocao,
    preco_promocao,
    ativo
  }: ICreateProductsDTO): Promise<Product>{
    const product = this.ormRepository.create({nome, descricao,preco,quantidade,promocao,preco_promocao,ativo});
    await this.ormRepository.save(product);
    return product;
  }
}