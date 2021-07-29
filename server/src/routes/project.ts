// require in controllers
import { Router } from 'express';
import { projectController } from '../controllers';
import { ensureAuth } from '../middlewares';

const router = Router();

router.post('/', ensureAuth, projectController.createProject, (_req, res) => {
  res.status(200).json({
    project: res.locals.project,
  });
});

// GET /projects?role=assigner
// GET /projects?role=assignee

// router.get('/', ensureAuth, (req, res, next) => {
//   if (req.query.role === 'assigner') {
//     // ...
//   } else if (req.query.role === 'assignee') {
//     // ...
//   } else {
//     next(Error('invalid role'));
//   }
// });

router.get(
  '/assigner',
  ensureAuth,
  projectController.getAssignerProjects,
  (req, res) => {
    res.status(200).json({
      projects: res.locals.projects,
    });
  }
);

router.get(
  '/assignee',
  ensureAuth,
  projectController.getAssigneeProjects,
  (req, res) => {
    res.status(200).json({
      projects: res.locals.projects,
    });
  }
);

router.get(
  '/:projectId/assigner',
  ensureAuth,
  projectController.getAssignerProject,
  (req, res) => {
    res.status(200).json({
      project: res.locals.project,
      users: res.locals.users,
    });
  }
);

router.get(
  '/:projectId/assignee',
  ensureAuth,
  projectController.getAssigneeProject,
  (req, res) => {}
);

router.post(
  '/:projectId/assign',
  ensureAuth,
  projectController.assignUsers,
  (req, res) => {
    res.status(200).json({
      message: 'successfully assigned users',
    });
  }
);

router.get(
  '/:projectId/unassign',
  ensureAuth,
  projectController.unassignUser,
  (req, res) => {
    res.status(200).json({
      message: 'successfully unassigned user',
    });
  }
);

// GET / get all
// GET /:id get specific one
// POST / create
// PATCH /:id update specific
// DELETE /:id delete specific

export const projectRouter = router;
