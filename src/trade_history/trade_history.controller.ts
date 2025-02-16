import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { UpdateTradeHistoryDto } from './dto/update-trade_history.dto';

@Controller('trade-history')
export class TradeHistoryController {
  constructor(private readonly tradeHistoryService: TradeHistoryService) {}

  @Post()
  create(@Body() createTradeHistoryDto: CreateTradeHistoryDto) {
    return this.tradeHistoryService.create(createTradeHistoryDto);
  }

  @Get()
  findAll() {
    return this.tradeHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tradeHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTradeHistoryDto: UpdateTradeHistoryDto) {
    return this.tradeHistoryService.update(+id, updateTradeHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tradeHistoryService.remove(+id);
  }
}
