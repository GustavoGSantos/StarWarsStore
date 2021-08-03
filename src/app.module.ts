import { Module } from '@nestjs/common';
//Controller
import { AppController } from './app.controller';
import { LoginController } from './login/login.controller';
import { CatalogController } from './catalog/catalog.controller';
import { ProductsController } from './products/products.controller';
//Services
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { CatalogService } from './catalog/catalog.service';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    CatalogController,
    ProductsController,
  ],
  providers: [AppService, LoginService, CatalogService, ProductsService],
})
export class AppModule {}
