import session from 'express-session';
import connectPg from 'connect-pg-simple';
import pg from 'pg';
import { Router } from 'express';
import { ENV } from '../config';

const pgSession = connectPg(session);

const pool = new pg.Pool({
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.NODE_ENV === 'test' ? 'test' : undefined,
});

export const sessionHandler = session({
  store: new pgSession({
    pool,
  }),
  secret: ENV.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
});

const router = Router();

router.use(sessionHandler);

router.get('/session', (req, res) => {
  res.status(200).json({
    session: req.session,
  });
});

router.post('/session', (req, res) => {
  (req.session as any).data = req.body;
  res.status(200).json({
    message: 'saved session',
  });
});

export const sessionRouter = router;
