import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTradeHistoryDto } from './dto/create-trade_history.dto';
import { TradeHistory } from './entities/trade_history.entity';
import { InjectModel } from '@nestjs/sequelize';
import { PaginationUtility } from 'src/common/utils/pagination.utility';
import { PaginatedResponse } from 'src/interfaces/pagination.interface';

type FindUserTradesPayload = {
  user_id: string;
  limit?: number;
  page?: number;
};

@Injectable()
export class TradeHistoryService {
  constructor(
    @InjectModel(TradeHistory) private tradeHistoryModel: typeof TradeHistory,
    private readonly paginationUtil: PaginationUtility,
  ) {}

  /**
   * Add new trade history
   */
  async create(payload: CreateTradeHistoryDto & { user_id: string | number }) {
    try {
      //creating the trade
      await this.tradeHistoryModel.create({
        ...payload,
      });

      return { success: true, message: `Trade created` };
    } catch (e) {
      throw e;
    }
  }

  /**
   * Fetch all trades for a specific user.
   *
   */

  async findUserTrades(
    payload: FindUserTradesPayload,
  ): Promise<PaginatedResponse<TradeHistory>> {
    try {
      const { user_id, limit = 10, page = 1 } = payload;
      const pagination_options = this.paginationUtil.getPaginationOptions(
        page,
        limit,
      );

      const { rows: data, count: total } =
        await this.tradeHistoryModel.findAndCountAll({
          where: {
            user_id,
          },
          ...pagination_options,
          order: [['timestamp', 'DESC']],
        });

      return this.paginationUtil.paginate(data, total, page, limit);
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
