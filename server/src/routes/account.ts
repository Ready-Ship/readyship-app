import { Router } from 'express';
import { accountController } from '../controllers';

const router = Router();

router.post('/signup', accountController.signUp, (req, res) => {
  res.status(200).json({ account: res.locals.account });
});

export const accountRouter = router;
