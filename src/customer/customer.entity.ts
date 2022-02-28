import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Customer extends Model {
  @Column
  name: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column(DataType.BIGINT)
  phoneNumber: number;
}
