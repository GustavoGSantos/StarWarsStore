import { Body, Controller, Get } from '@nestjs/common';
import { ClientHistoryService } from './client-history.service';

@Controller('/starstore/client-history/clientId')
export class ClientHistoryController {
  constructor(private readonly clientHistoryService: ClientHistoryService) {}
  @Get()
  public getClientHistory(@Body() body): any {
    return this.clientHistoryService.getClientHistory();
  }
}
