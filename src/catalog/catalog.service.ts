import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return [
      {
        title: 'Blusa do Imperio',
        price: 7990,
        zipcode: '78993-000',
        seller: 'João da Silva',
        thumbnailHd:
          'https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg',
        date: '26/11/2015',
      },
      {
        title: 'Blusa Han Shot First',
        price: 7990,
        zipcode: '13500-110',
        seller: 'Joana',
        thumbnailHd:
          'https://cdn.awsli.com.br/1000x1000/21/21351/produto/7234148/55692a941d.jpg',
        date: '26/11/2015',
      },
      {
        title: 'Sabre de luz',
        price: 150000,
        zipcode: '13537-000',
        seller: 'Mario Mota',
        thumbnailHd:
          'http://www.obrigadopelospeixes.com/wp-content/uploads/2015/12/kalippe_lightsaber_by_jnetrocks-d4dyzpo1-1024x600.jpg',
        date: '20/11/2015',
      },
    ];
  }
}
