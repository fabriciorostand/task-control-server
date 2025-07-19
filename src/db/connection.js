import { Sequelize } from 'sequelize';
import { env } from '../env.js';

export const db = new Sequelize(env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});