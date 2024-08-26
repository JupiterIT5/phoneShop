import { Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Controller } from '@nestjs/common'
import { ProductDTO } from './dto/product.dto'


@Resolver(of => ProductDTO)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(returns => [ProductDTO], {name: 'getProduct'})
  getAll() {
    return this.productService.getAll()
  }

  @Query(returns => [ProductDTO], {name: 'getProductDiscount'})
  getAllDiscount() {
    return this.productService.getAllDiscount()
  }
}
