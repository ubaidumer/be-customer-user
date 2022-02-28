import { Sequelize } from 'sequelize-typescript';
import CONFIG from 'src/config/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: CONFIG.DATABASE_TYPE as any,
        host: CONFIG.DATABASE_HOST as any,
        port: CONFIG.DATABASE_PORT as any,
        username: CONFIG.DATABASE_USERNAME as any,
        password: CONFIG.DATABASE_PASSWORD as any,
        database: CONFIG.DATABASE_NAME as any,
      });
      sequelize.addModels(CONFIG.DATABASE_ENTITIES);
      await sequelize.sync();
      return sequelize;
    },
  },
];
