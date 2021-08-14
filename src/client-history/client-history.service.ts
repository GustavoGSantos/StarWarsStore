import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientHistoryService {
  getClientHistory() {
    return [
      {
        client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
        purchase_id: '569c30dc-6bdb-407a-b18b-3794f9b206a8',
        value: 1234,
        date: '19/08/2016',
        card_number: '**** **** **** 1234',
      },
      {
        client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
        purchase_id: '569c30dc-6bdb-407a-b18b-3794f9b206a8',
        value: 1234,
        date: '19/08/2016',
        card_number: '**** **** **** 1234',
      },
    ];
  }
}
