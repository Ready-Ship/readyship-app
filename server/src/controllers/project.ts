import { RequestHandler } from 'express';
import { nextTick } from 'process';
import { resourceLimits } from 'worker_threads';
import * as yup from 'yup';
import { Project } from '../models'; //check export and path for this

const projectCheck = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

export class ProjectController {

  //create new project
  createProject: RequestHandler = async (req, res, next) => {
    try {
      // populate new project
      const { title, description } = await projectCheck.validate(req.body);
      const project = await Project.createProject({ title, creatorid: res.locals.userId, description });
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
      await Project.deleteProject(res.locals.projectId); // dont need to store this cuz nothing is being returned?
      return next();
    } catch (err) {
      next(err);
    }
  };

  // find proj
  findByProjectId: RequestHandler = async (req, res, next) => {
    try {
      const project = await Project.findById(req.body); // will req.body contain the projectid?
      res.locals.project = project;
      return next();
    } catch (err) {
      next(err);
    }
  };

  // find projs assigned to user
  findByUserId: RequestHandler = async (req, res, next) => {
    try {
      const project = await Project.findByUserId(req.body);
      res.locals.project = project;
      return next();
    } catch (err) {
      next(err);
    }
  };

  // get project by proj id and user id
  findByProjectIdAndUserId: RequestHandler = async (req, res, next) => {
    try {
      const { project } = await Project.findByProjectIdAndUserId(req.body.project, req.body.user); //how do I get both args in?
      res.locals.project = project;
      return next();
    } catch (err) {
      next(err);
    }
  };

  // get all users by project id
  findUsersByProjectId: RequestHandler = async (req, res, next) => {
    try {
      const users = await Project.getUserIdsByProjectId(req.body);
      res.locals.users = users;
      return next();
    } catch (err) {
      next(err);
    }
  };

  // get all available users
  findAllAvailableUsers: RequestHandler = async (req, res, next) => {
    try {
      const users = await Project.getAllAvailableUsers(req.body.projectid);
      res.locals.users = users;
      return next();
    } catch (err) {
      next(err);
    }
  };

  // assign user to project 
  assignUser: RequestHandler = async (req, res, next) => {
    try {
      const assignee = await Project.assignUser(req.body.projectid, req.body.userid);
      res.locals.assignee = assignee; //can i do this?
      return next();
    } catch (err) {
      next(err);
    }
  };

  // assign multiple users to project
  assignManyUsers: RequestHandler = async (req, res, next) => {
    try {
      const assignees = await Project.assignMultipleUsers(req.body.projectid, ...req.body.users); //users would prob be an area here, how do I access that?
      res.locals.assignees = assignees;
      return next ();
    } catch (err) {
      next(err);
    }
  };

  // // get all projects....
  // findAllProjects: RequestHandler = async (req, res, next) => {
  //     try {
  //       // await SELECT * Project.title FROM project //can we use SQL queries here?
  //       const projects = await Project.findByUserId(res.locals.userId);
  //       res.locals.projects = projects;
  //       return next();
  //     } catch (err) {
  //       next(err);
  //     }
  // };

}

export const projectController = new ProjectController();