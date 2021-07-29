import { Router } from 'express';
import { accountController } from '../controllers';
import { ensureAuth } from '../middlewares';

const router = Router();

router.post(
  '/signup',
  accountController.signup,
  accountController.saveSession,
  (req, res) => {
    res.status(200).json({ account: res.locals.account });
  }
);

router.post(
  '/login',
  accountController.login,
  accountController.saveSession,
  (req, res) => {
    res.status(200).json({ account: res.locals.account });
  }
);

router.post('/signout', async (req, res, next) => {
  try {
    await new Promise<void>((resolve, reject) =>
      req.session.destroy((err) => {
        if (err) return reject(err);
        return resolve();
      })
    );
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'signed out' });
  } catch (err) {
    next(err);
  }
});

router.post(
  '/authenticate',
  ensureAuth,
  accountController.authenticate,
  (req, res) => {
    res.status(200).json({
      account: res.locals.account,
    });
  }
);

export const accountRouter = router;
