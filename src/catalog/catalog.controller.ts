import { Controller, Post, Body } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('/starstore/product')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}
  @Post()
  public creatProduct(@Body() body): any {
    return this.catalogService.createProduct(
      body.title,
      body.price,
      body.zipcode,
      body.seller,
      body.thumbnailHd,
      body.date,
    );
  }
}
