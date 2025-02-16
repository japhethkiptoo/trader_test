import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Role } from 'src/interfaces/user.interface';
import { TradeHistory } from 'src/trade_history/entities/trade_history.entity';

@Table({ tableName: 'users', timestamps: true, paranoid: true })
export class User extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @Unique
  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  password: string;

  //Role as a string - assumption that roles rarely change: enum (master, follower)
  @Column({
    type: DataType.ENUM,
    values: ['master', 'follower', 'trader'],
    defaultValue: 'follower',
  })
  role: Role;

  @HasMany(() => TradeHistory)
  trade_history: TradeHistory[];
}
