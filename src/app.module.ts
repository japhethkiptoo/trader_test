import { Module } from '@nestjs/common';
import { TradeHistoryModule } from './trade_history/trade_history.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TradeHistoryModule, UserModule, DatabaseModule],
})
export class AppModule {}
