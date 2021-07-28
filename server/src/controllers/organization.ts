import { RequestHandler } from 'express';
import * as yup from 'yup';
import { DBDataSource } from '../config';
import { Organization } from '../models';

const organizationCheck = yup.object({
  name: yup.string().required(),
});

export class OrganizationController {
  client = DBDataSource.instance.client;

  createOrganization: RequestHandler = async (req, res, next) => {
    try {
      const { name } = await organizationCheck.validate(req.body);

      const result = await Organization.create({
        name,
        creatorid: res.locals.userId,
      });

      res.locals.organization = result.rows[0];

      next();
    } catch (err) {
      next(err);
    }
  };
}

export const organizationController = new OrganizationController();
