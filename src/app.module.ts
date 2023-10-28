import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
//Controller
import { AppController } from './app.controller';
import { LoginController } from './login/login.controller';
import { CatalogController } from './catalog/catalog.controller';
import { ProductController } from './product/product.controller';
import { BuyController } from './buy/buy.controller';
import { HistoryController } from './history/history.controller';
import { ClientHistoryService } from './client-history/client-history.service';
//Services
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { CatalogService } from './catalog/catalog.service';
import { ProductService } from './product/product.service';
import { BuyService } from './buy/buy.service';
import { HistoryService } from './history/history.service';
import { ClientHistoryController } from './client-history/client-history.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Gustavo',
      password: 'root',
      database: 'StarWarsStore',
      entities: ['./create-user/create-user.entity.ts'],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    LoginController,
    CatalogController,
    ProductController,
    BuyController,
    HistoryController,
    ClientHistoryController,
  ],
  providers: [
    AppService,
    LoginService,
    CatalogService,
    ProductService,
    BuyService,
    HistoryService,
    ClientHistoryService,
  ],
})
export class AppModule {}
