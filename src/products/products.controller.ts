import { Body, Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/starstore/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  public getProduct(@Body() body): any {
    return this.productsService.getProducts();
  }
}
