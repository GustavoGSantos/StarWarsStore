import { Test, TestingModule } from '@nestjs/testing';
import { ClientHistoryController } from './client-history.controller';

describe('clientHistoryController', () => {
  let controller: ClientHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientHistoryController],
    }).compile();

    controller = module.get<ClientHistoryController>(ClientHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
