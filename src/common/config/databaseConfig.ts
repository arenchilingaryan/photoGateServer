import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { Dialect } from 'sequelize/types';

dotenv.config({ path: resolve(__dirname, '../../../.env.develop') });

const {
  DB_HOST,
  DB_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DB_DIALECT,
} = process.env;

console.log(DB_PORT, DB_HOST);

export const databaseConfig = {
  host: DB_HOST,
  port: Number(DB_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: DB_DIALECT as Dialect,
  define: {
    timestamps: false,
    version: false,
  },
  sync: { force: true },
  autoLoadModels: true,
};
