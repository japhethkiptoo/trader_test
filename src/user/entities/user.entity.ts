import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';

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
}
