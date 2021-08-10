import { Injectable, UnauthorizedException } from '@nestjs/common';

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
    if (
      title != null &&
      price != null &&
      zipcode != null &&
      seller != null &&
      date != null
    ) {
      return {
        message: 'Product created successfully',
      };
    } else {
      throw new UnauthorizedException(undefined, 'Missing required fields');
    }
  }
}
