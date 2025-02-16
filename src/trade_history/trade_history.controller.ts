/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('trade-history')
export class TradeHistoryController {
  constructor(private readonly tradeHistoryService: TradeHistoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createTradeHistoryDto: CreateTradeHistoryDto,
    @Req() req: any,
  ) {
    const user_id = req.user.user_id;
    return await this.tradeHistoryService.create({
      ...createTradeHistoryDto,
      user_id,
    });
  }

  @Get(':user_id')
  @UseGuards(AuthGuard, RoleGuard)
  async findUserTrades(@Param('user_id') user_id: string) {
    try {
      return await this.tradeHistoryService.findUserTrades({ user_id });
    } catch (e) {
      throw e;
    }
  }

  @Get(':user_id/:trade_id')
  @UseGuards(AuthGuard, RoleGuard)
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
