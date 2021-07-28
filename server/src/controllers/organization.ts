import { RequestHandler } from 'express';
import * as yup from 'yup';
import { DBDataSource } from '../config';
import { Organization } from '../models';

const organizationCheck = yup.object({
  name: yup.string().required(),
});

export class OrganizationController {
  client = DBDataSource.instance.client;

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const organizations = await Organization.find();
      res.locals.organizations = organizations;

      next();
    } catch (err) {
      next(err);
    }
  };

  createOrganization: RequestHandler = async (req, res, next) => {
    try {
      const { name } = await organizationCheck.validate(req.body);

      const organization = await Organization.create({
        name,
        creatorid: res.locals.userId,
      });
      res.locals.organization = organization;

      next();
    } catch (err) {
      next(err);
    }
  };

  getUserOrganizations: RequestHandler = async (req, res, next) => {
    try {
      const organizations = await Organization.findByUserId(res.locals.userId);
      res.locals.organizations = organizations;

      next();
    } catch (err) {
      next(err);
    }
  };

  joinOrganization: RequestHandler = async (req, res, next) => {
    try {
      const { organizationId } = req.params;
      await Organization.joinOrganization(
        parseInt(organizationId),
        res.locals.userId
      );

      next();
    } catch (err) {
      next(err);
    }
  };

  leaveOrganization: RequestHandler = async (req, res, next) => {
    try {
      const { organizationId } = req.params;
      await Organization.leaveOrganization(
        parseInt(organizationId),
        res.locals.userId
      );

      next();
    } catch (err) {
      next(err);
    }
  };
}

export const organizationController = new OrganizationController();
