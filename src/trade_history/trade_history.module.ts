import { Module } from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { TradeHistoryController } from './trade_history.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TradeHistory } from './entities/trade_history.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([TradeHistory]), AuthModule],
  controllers: [TradeHistoryController],
  providers: [TradeHistoryService],
})
export class TradeHistoryModule {}
