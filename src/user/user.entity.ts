import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column
  role: string;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  is_active: number;
}
