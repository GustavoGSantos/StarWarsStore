import { Body, Controller, Post } from '@nestjs/common';
import { BuyService } from './buy.service';

@Controller('/starstore/buy')
export class BuyController {
  constructor(private readonly buyService: BuyService) {}
  @Post()
  public buyProduct(@Body() body): any {
    return this.buyService.postBuy(
      body.client_id,
      body.client_name,
      body.total_to_pay,
      body.card_number,
      body.card_holder_name,
      body.value,
      body.cvv,
      body.exp_date,
    );
  }
}
