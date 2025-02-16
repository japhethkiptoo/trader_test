import { Module } from '@nestjs/common';
import { TradeHistoryModule } from './trade_history/trade_history.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TradeHistoryModule, UserModule],
})
export class AppModule {}
