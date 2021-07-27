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

export const accountRouter = router;
