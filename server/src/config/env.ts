import { config } from 'dotenv';

config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT)
  : 5432;
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD!;
