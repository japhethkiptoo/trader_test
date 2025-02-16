import { Test, TestingModule } from '@nestjs/testing';
import { TradeHistoryController } from './trade_history.controller';
import { TradeHistoryService } from './trade_history.service';

describe('TradeHistoryController', () => {
  let controller: TradeHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeHistoryController],
      providers: [TradeHistoryService],
    }).compile();

    controller = module.get<TradeHistoryController>(TradeHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
