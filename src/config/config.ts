import * as dotenv from 'dotenv';
import { Customer } from 'src/customer/customer.entity';
import { User } from 'src/user/user.entity';
dotenv.config();
const CONFIG = {
  /*DATABASE-CONFIG VARIABLES*/
  DATABASE_TYPE: String(`${process.env.MYSQL_DATABASE_TYPE}`),
  DATABASE_HOST: String(`${process.env.MYSQL_DATABASE_HOST}`),
  DATABASE_PORT: process.env.MYSQL_DATABASE_PORT,
  DATABASE_USERNAME: String(`${process.env.MYSQL_DATABASE_USERNAME}`),
  DATABASE_PASSWORD: String(`${process.env.MYSQL_DATABASE_PASSWORD}`),
  DATABASE_NAME: String(`${process.env.MYSQL_DATABASE_NAME}`),
  DATABASE_ENTITIES: [User, Customer],
  DATABASE_SYNCHRONIZE: true,
  DATABASE_MULTI_STATEMENT: false,
};

export default CONFIG;
