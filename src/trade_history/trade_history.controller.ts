import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { TradeHistoryService } from './trade_history.service';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { OwnGuard } from 'src/auth/own.guard';

@UseGuards(AuthGuard)
@Roles('master', 'trader', 'follower')
@Controller('trade-history')
export class TradeHistoryController {
  constructor(private readonly tradeHistoryService: TradeHistoryService) {}

  @Post()
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
  @UseGuards(RoleGuard, OwnGuard)
  async findUserTrades(
    @Param('user_id') user_id: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    try {
      return await this.tradeHistoryService.findUserTrades({
        user_id,
        page,
        limit,
      });
    } catch (e) {
      throw e;
    }
  }

  @Get(':user_id/:trade_id')
  @UseGuards(RoleGuard, OwnGuard)
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
