import { Body, Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('/starstore/history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}
  @Get()
  public getHistory(@Body() body): any {
    return this.historyService.getHistory();
  }
}
