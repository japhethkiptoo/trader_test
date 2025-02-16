import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';

@Controller('trade-history')
export class TradeHistoryController {
  constructor(private readonly tradeHistoryService: TradeHistoryService) {}

  @Post()
  async create(@Body() createTradeHistoryDto: CreateTradeHistoryDto) {
    return await this.tradeHistoryService.create(createTradeHistoryDto);
  }

  @Get(':user_id')
  async findUserTrades(@Param('user_id') user_id: string) {
    try {
      return await this.tradeHistoryService.findUserTrades({ user_id });
    } catch (e) {
      throw e;
    }
  }

  @Get(':user_id/:trade_id')
  async findTrade(
    @Param('user_id') user_id: string,
    @Param('trade_id') trade_id: string,
  ) {
    try {
      return await this.tradeHistoryService.findTrade(user_id, trade_id);
    } catch (e) {
      throw e;
    }
  }
}
