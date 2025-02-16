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
    type: DataType.FLOAT,
  })
  amount: string | number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
  price: string | number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  status: TradeStatus;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
