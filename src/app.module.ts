import { Module } from '@nestjs/common';
import { TradeHistoryModule } from './trade_history/trade_history.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    TradeHistoryModule,
    UserModule,
    DatabaseModule,
  ],
})
export class AppModule {}
