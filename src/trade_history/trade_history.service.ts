import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { TradeHistory } from './entities/trade_history.entity';
import { InjectModel } from '@nestjs/sequelize';

type FindUserTradesPayload = {
  user_id: string;
};

@Injectable()
export class TradeHistoryService {
  constructor(
    @InjectModel(TradeHistory) private tradeHistoryModel: typeof TradeHistory,
  ) {}

  /**
   * Add new trade history
   */
  async create(payload: CreateTradeHistoryDto) {
    try {
      await this.tradeHistoryModel.create({
        ...payload,
      });

      return { success: true };
    } catch (e) {
      throw e;
    }
  }

  /**
   * Fetch all trades for a specific user.
   *
   */

  async findUserTrades(payload: FindUserTradesPayload) {
    try {
      const { user_id } = payload;
      const results = await this.tradeHistoryModel.findAll({
        where: {
          user_id,
        },
      });

      return results;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Fetch a single trade by trade id and user_id
   */

  async findTrade(user_id: string | number, trade_id: string | number) {
    try {
      const trade = await this.tradeHistoryModel.findOne({
        where: {
          user_id,
          id: trade_id,
        },
      });

      if (!trade) throw new NotFoundException(`Trade not found`);

      return trade;
    } catch (e) {
      throw e;
    }
  }
}
