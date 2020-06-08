import Product from '../infra/typeorm/entities/Products';
import ICreateProductDTO from '../dtos/ICreateProductsDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(nome: string): Promise<Product | undefined>;
}