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

router.get(
  '/',
  ensureAuth,
  organizationController.getUserOrganizations,
  (req, res) => {
    res.status(200).json({
      organizations: res.locals.organizations,
    });
  }
);

router.get('/all', organizationController.getAll, (req, res) => {
  res.status(200).json({
    organizations: res.locals.organizations,
  });
});

router.post(
  '/:organizationId/join',
  ensureAuth,
  organizationController.joinOrganization,
  (req, res) => {
    res.status(200).json({
      message: 'successfully joined organiztion',
    });
  }
);

router.post(
  '/:organizationId/leave',
  ensureAuth,
  organizationController.leaveOrganization,
  (req, res) => {
    res.status(200).json({
      message: 'successfully left organization',
    });
  }
);

export const organizationRouter = router;
