import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { TradeStatus, TradeType } from 'src/interfaces/trade.interface';
import { User } from 'src/user/entities/user.entity';

@Table({
  tableName: 'trade_histories',
  timestamps: true,
  paranoid: true,
})
export class TradeHistory extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  trade_type: TradeType;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  symbol: string;

  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL(18, 8),
  })
  amount: number;

  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL(18, 8),
  })
  price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  status: TradeStatus;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  timestamp: Date;

  //setup index on user_id since we are filtering trades by user_id
  @Index('user_id_index')
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
