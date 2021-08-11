import { Injectable } from '@nestjs/common';

@Injectable()
export class BuyService {
  postBuy(
    client_id: string,
    client_name: string,
    total_to_pay: number,
    card_number: string,
    card_holder_name: string,
    value: number,
    cvv: number,
    exp_date: string,
  ) {
    return 'Your purchase is complete!';
  }
}
