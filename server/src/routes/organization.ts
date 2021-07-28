import { Router } from 'express';
import { organizationController } from '../controllers';
import { ensureAuth } from '../middlewares';

const router = Router();

router.post(
  '/',
  ensureAuth,
  organizationController.createOrganization,
  (req, res) => {
    res.status(200).json({
      organization: res.locals.organization,
    });
  }
);

export const organizationRouter = router;
