import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogService {
  createProduct(
    title: string,
    price: number,
    zipcode: string,
    seller: string,
    thumbnailHd: string,
    date: string,
  ) {
    return {
      message: 'Product created successfully',
      title: title,
      price: price,
      zipcode: zipcode,
      seller: seller,
      thumbnailHd: thumbnailHd,
      date: date,
    };
  }
}
