import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { TradeHistory } from 'src/trade_history/entities/trade_history.entity';

@Table({ tableName: 'users', timestamps: true, paranoid: true })
export class User extends Model {
  @Column
  @AllowNull(false)
  name: string;

  @Column
  @Unique
  @AllowNull(false)
  username: string;

  @Column
  @AllowNull(false)
  password: string;

  //Role as a string - assumption that roles rarely change: enum (master, follower)
  @Column({
    type: DataType.ENUM,
    values: ['master', 'follower'],
    defaultValue: 'follower',
  })
  role: string;

  @HasMany(() => TradeHistory)
  trade_history: TradeHistory[];
}
