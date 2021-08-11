import { Body, Controller, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('/starstore/products')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}
  @Get()
  public getProduct(@Body() body): any {
    return this.catalogService.getProducts();
  }
}
