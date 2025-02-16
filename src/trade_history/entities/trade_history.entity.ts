import { Column, Model, Table } from 'sequelize-typescript';
import { TradeStatus, TradeType } from 'src/interfaces/trade.interface';

@Table({
  tableName: 'trade_histories',
  timestamps: true,
  paranoid: true,
  createdAt: 'timestamp',
})
export class TradeHistory extends Model {
  @Column
  trade_type: TradeType;

  @Column
  symbol: string;

  @Column
  amount: string | number;

  @Column
  price: string | number;

  @Column
  status: TradeStatus;
}
