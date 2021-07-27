import { Router } from 'express';
import { accountController } from '../controllers';

const router = Router();

router.post('/signup', accountController.signup, (req, res) => {
  res.status(200).json({ account: res.locals.account });
});

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
    res.status(200).json({ message: 'signed out' });
  } catch (err) {
    next(err);
  }
});

export const accountRouter = router;
