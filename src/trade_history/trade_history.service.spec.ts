import { Test, TestingModule } from '@nestjs/testing';
import { TradeHistoryService } from './trade_history.service';

describe('TradeHistoryService', () => {
  let service: TradeHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradeHistoryService],
    }).compile();

    service = module.get<TradeHistoryService>(TradeHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
