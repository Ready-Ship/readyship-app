import { RequestHandler } from 'express';
import * as yup from 'yup';
import { Project } from '../models'; //check export and path for this

const projectCheck = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

const assignProjectCheck = yup.object({
  userIds: yup.array().of(yup.number().required()).required(),
});


export class ProjectController {
  // create new project
  createProject: RequestHandler = async (req, res, next) => {
    try {
      // populate new project
      const { title, description } = await projectCheck.validate(req.body);
      const project = await Project.createProject({
        title,
        creatorid: res.locals.userId,
        description,
      });
      //do we need this available elsewhere?
      res.locals.project = project;

      return next();
    } catch (err) {
      next(err);
    }
  };

  // delete proj
  deleteProject: RequestHandler = async (req, res, next) => {
    try {
      await Project.deleteProject(parseInt(req.params.projectId)); // dont need to store this cuz nothing is being returned?

      return next();
    } catch (err) {
      next(err);
    }
  };

  getAssignerProjects: RequestHandler = async (req, res, next) => {
    try {
      const projects = await Project.findAllByAssignerId(res.locals.userId); 
      res.locals.projects = projects;

      return next();
    } catch (err) {
      next(err);
    }
  };

  getAssigneeProjects: RequestHandler = async (req, res, next) => {
    try {
      const projects = await Project.findByAssigneeUserId(res.locals.userId)
      res.locals.projects = projects;
    
      return next();
    } catch (err) {
      next(err);
    }
  };

  getAssignerProject: RequestHandler = async (req, res, next) => {
    try {
      const {projectId} = req.params;

      const project = await Project.findById(parseInt(projectId))
      const users = await Project.getUsersByProjectId(parseInt(projectId));
      res.locals.project = project;
      res.locals.users = users;
      
      return next();
    } catch (err) {
      next(err)
    }
  };

  getAssigneeProject: RequestHandler = async (req, res, next) => {
    try {
      const {projectId} = req.params;
  
      const project = await Project.findById(parseInt(projectId));
      res.locals.project = project;
  
      return next();
    } catch (err) {
      next(err);
    }
  };

  // assign multiple users to project
  assignUsers: RequestHandler = async (req, res, next) => {
    try {
      const { userIds } = await assignProjectCheck.validate(req.body);
      await Project.assignUsers(parseInt(req.params.projectId), userIds); //users would prob be an array here, how do I access that?

      return next();
    } catch (err) {
      next(err);
    }
  };

  unassignUser: RequestHandler = async (req, res, next) => {
    try {
      // grab the project
      const project = await Project.findById(parseInt(req.params.projectId))

      // check if the project's creator is the current user
      if (project.creatorid != res.locals.userId) {
        throw Error('you do not have permission to do this');
      }

      await Project.unassignUser((parseInt(req.params.projectId)), req.body.userId ); // dont need to store this cuz nothing is being returned?

      return next();
    } catch (err) {
      next(err);
    }
  };

}


export const projectController = new ProjectController();
