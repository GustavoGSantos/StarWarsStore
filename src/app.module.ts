import { Module } from '@nestjs/common';
//Controller
import { AppController } from './app.controller';
import { LoginController } from './login/login.controller';
import { CatalogController } from './catalog/catalog.controller';
import { ProductController } from './product/product.controller';
import { BuyController } from './buy/buy.controller';
import { HistoryController } from './history/history.controller';
//Services
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { CatalogService } from './catalog/catalog.service';
import { ProductService } from './product/product.service';
import { BuyService } from './buy/buy.service';
import { HistoryService } from './history/history.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    CatalogController,
    ProductController,
    BuyController,
    HistoryController,
  ],
  providers: [
    AppService,
    LoginService,
    CatalogService,
    ProductService,
    BuyService,
    HistoryService,
  ],
})
export class AppModule {}
