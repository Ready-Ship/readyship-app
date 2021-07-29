// require in controllers
import { Router } from 'express';
import { projectController } from '../controllers';
import { ensureAuth } from '../middlewares';

const router = Router();

router.post(
  '/', 
  ensureAuth, 
  projectController.createProject, 
  (req, res) => {
    res.status(200).json({
      project: res.locals.project,
    })
  }
);

router.get(
  '/', 
  ensureAuth, 
  projectController.findAllProjects, 
  (req, res) => {
    res.status(200).json({
      projects: res.locals.projects,
    })
  }
);



router.post(
  '/:projectId/assign',
  ensureAuth,
  projectController.assignUser,
  (req, res) => {
    res.status(200).json({
      user: res.locals.userId, //userId or user?
    })
  }
); 

export const projectRouter = router;