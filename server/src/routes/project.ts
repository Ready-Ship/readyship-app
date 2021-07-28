// require in controllers
import {Router} from 'express'
import { projectController } from '../controllers';

const router = Router();

router.get('/', projectController.findAllProjects);

router.get('/:projectId/assignee', ) // /project/:projectId

router.post('/:projectId/assign')

export const projectRouter = router;

// module.exports = app => {
//   // const projects = require('../controllers/projectController.controller.ts'); //update controller path

//   // create new project
//   app.post('/projects', projectController.create);

//   // get all projects
//   app.get('/projects', projectController.findAll);

//   // get a single project
//   app.get('/projects/:projectsId', projectController.findOne);

//   // update a project (do we need this?)
//   app.put('/projects/:projectsId', projectController.update);

//   // delete a project vid id
//   app.delete('/projects/:projectsId', projectController.delete);

// }


//do we need an app.listen?