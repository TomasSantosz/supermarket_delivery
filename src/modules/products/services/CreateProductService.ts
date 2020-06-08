import { injectable, inject} from 'tsyringe';
import AppError from '@shared/errors/AppError';


import Product from '../infra/typeorm/entities/Products';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  promocao?: number;
  preco_promocao?: number;
  ativo: number;
}

@injectable()
class CreateProductService{
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ){}

  public async execute({nome,descricao,preco,quantidade,promocao,preco_promocao,ativo}: IRequest): Promise<Product>{
    const findProduct = await this.productsRepository.findByName(nome);

    if(findProduct){
      throw new AppError('This Product is already exist', 400);
    }

    const product = await this.productsRepository.create({
      nome,
      descricao,
      preco,
      quantidade,
      promocao,
      preco_promocao,
      ativo
    });

    return product;
  }
}

export default CreateProductService;