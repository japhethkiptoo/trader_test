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
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';
import { CreateTradeHistroryResponseDTO } from './dto/create-trade_history-response.dto';

@ApiBearerAuth()
@ApiTags('Trade')
@UseGuards(AuthGuard)
@Roles('master', 'trader', 'follower')
@Controller('trade-history')
export class TradeHistoryController {
  constructor(private readonly tradeHistoryService: TradeHistoryService) {}

  @ZodSerializerDto(CreateTradeHistroryResponseDTO)
  @Post()
  async create(
    @Body() createTradeHistoryDto: CreateTradeHistoryDto,
    @Req() req: any,
  ): Promise<CreateTradeHistroryResponseDTO> {
    const user_id = req.user.user_id;
    return await this.tradeHistoryService.create({
      ...createTradeHistoryDto,
      user_id,
    });
  }

  //Error:zod serialization not working for paginated records
  //@ZodSerializerDto(TradeHistoryPaginatedResponseDTO)
  @Get(':user_id')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @UseGuards(RoleGuard, OwnGuard)
  async findUserTrades(
    @Param('user_id') user_id: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
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

  //@ZodSerializerDto(TradeHistoryResponseDTO)
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
