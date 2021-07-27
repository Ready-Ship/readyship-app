import express from 'express';
import { DBDataSource } from './config';
import { sessionRouter } from './middlewares';

export const startServer = async () => {
  const db = DBDataSource.instance;
  await db.connect();
  await db.test();

  const app = express();

  app.use(express.json());

  app.use(sessionRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'nothing here',
    });
  });

  return new Promise((resolve) => {
    const server = app.listen(3000, () => {
      console.log('server started');
      resolve(server);
    });
  });
};
