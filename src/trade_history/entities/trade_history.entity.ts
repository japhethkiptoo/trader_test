import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TradeStatus, TradeType } from 'src/interfaces/trade.interface';
import { User } from 'src/user/entities/user.entity';

@Table({
  tableName: 'trade_histories',
  timestamps: true,
  paranoid: true,
  createdAt: 'timestamp',
})
export class TradeHistory extends Model {
  @Column({
    type: DataType.STRING,
  })
  @AllowNull(false)
  trade_type: TradeType;

  @Column({
    type: DataType.STRING,
  })
  @AllowNull(false)
  symbol: string;

  @Column({
    type: DataType.FLOAT,
  })
  @AllowNull(false)
  amount: string | number;

  @Column({
    type: DataType.FLOAT,
  })
  @AllowNull(false)
  price: string | number;

  @Column({
    type: DataType.STRING,
  })
  @AllowNull(false)
  status: TradeStatus;

  @ForeignKey(() => User)
  @Column
  @AllowNull(false)
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
