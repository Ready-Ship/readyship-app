import express from 'express';
import { DBDataSource } from './config';

export const startServer = async () => {
  const db = DBDataSource.instance;
  await db.connect();
  await db.test();

  const app = express();

  return new Promise((resolve) => {
    const server = app.listen(3000, () => {
      console.log('server started');
      resolve(server);
    });
  });
};
