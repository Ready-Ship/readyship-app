import express, { ErrorRequestHandler } from 'express';
import { DBDataSource } from './config';
import { sessionMiddleware } from './middlewares';
import { accountRouter } from './routes';

export const startServer = async () => {
  const db = DBDataSource.instance;
  await db.connect();
  await db.test();

  const app = express();

  app.use(express.json());

  app.use(sessionMiddleware);

  app.use('/account', accountRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'nothing here',
    });
  });

  app.use(((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      message: 'oops, an error occurred',
    });
  }) as ErrorRequestHandler);

  return new Promise((resolve) => {
    const server = app.listen(3000, () => {
      console.log('server started');
      resolve(server);
    });
  });
};
