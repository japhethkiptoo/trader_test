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

  describe('findUserTrades', () => {
    it('should return paginated trades-histories', async () => {
      const page = 1;
      const limit = 2;

      const result = await service.findUserTrades({
        user_id: String(1),
        page,
        limit,
      });

      expect(result).toBeDefined();

      expect(result).toEqual({
        data: expect.any(Array),
        total: expect.any(Number),
        page: expect.any(Number),
        limit: expect.any(Number),
        total_pages: expect.any(Number),
      });
    });

    it(`should return an empty array when no trades-history found`, async () => {
      const page = 1;
      const limit = 2;

      const result = await service.findUserTrades({
        user_id: String(10),
        page,
        limit,
      });

      expect(result.data).toEqual([]);
    });
  });
});
