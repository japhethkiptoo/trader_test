import { Module } from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { TradeHistoryController } from './trade_history.controller';

@Module({
  controllers: [TradeHistoryController],
  providers: [TradeHistoryService],
})
export class TradeHistoryModule {}
