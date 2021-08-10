import { Module } from '@nestjs/common';
//Controller
import { AppController } from './app.controller';
import { LoginController } from './login/login.controller';
import { CatalogController } from './product/product.controller';
import { ProductsController } from './catalog/catalog.controller';
//Services
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { CatalogService } from './product/product.service';
import { ProductsService } from './catalog/catalog.service';

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
