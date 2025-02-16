import { Injectable } from '@nestjs/common';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { UpdateTradeHistoryDto } from './dto/update-trade_history.dto';

@Injectable()
export class TradeHistoryService {
  create(createTradeHistoryDto: CreateTradeHistoryDto) {
    return 'This action adds a new tradeHistory';
  }

  findAll() {
    return `This action returns all tradeHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tradeHistory`;
  }

  update(id: number, updateTradeHistoryDto: UpdateTradeHistoryDto) {
    return `This action updates a #${id} tradeHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} tradeHistory`;
  }
}
