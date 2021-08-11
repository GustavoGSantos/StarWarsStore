import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Controller('/starstore/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  public createProduct(@Body() body): any {
    return this.productService.createProduct(
      body.title,
      body.price,
      body.zipcode,
      body.seller,
      body.thumbnailHd,
      body.date,
    );
  }
}
