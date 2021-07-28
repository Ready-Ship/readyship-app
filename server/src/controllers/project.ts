import { RequestHandler } from 'express';
import * as yup from 'yup';
import { Project } from '../models'; //check export and path for this

const projectCheck = yup.object({
  title: yup.string().required(),
});


export class ProjectController {

  //create new project
  createProject: RequestHandler = async (req, res, next) => {
    try {
      // populate new project
      const { title } = await projectCheck.validate(req.body);

      const project = await Project.create({ title, creatorid: res.locals.userId });

      //do we need this available elsewhere?
      res.locals.project = { ...project, project };

      return next();
    } catch (err) {
      next(err);
    }
  };

  // get all projects
  findAllProjects: RequestHandler = async (req, res, next) => {
      try {
        // await SELECT * Project.title FROM project //can we use SQL queries here?
        const projects = await Project.findByUserId(res.locals.userId)
        res.locals.projects = projects
        return next();
      } catch (err) {
        next(err);
      }
  };
}

export const projectController = new ProjectController();