import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { Account } from '../models';

const signUpCheck = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().required(),
});

const loginCheck = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export class AccountController {
  signup: RequestHandler = async (req, res, next) => {
    try {
      const { email, password, name } = await signUpCheck.validate(req.body);

      const hash = await bcrypt.hash(password, 10);
      const account = await Account.create({ email, password: hash, name });

      res.locals.account = { ...account };
      delete res.locals.account.password;

      return next();
    } catch (err) {
      next(err);
    }
  };

  login: RequestHandler = async (req, res, next) => {
    try {
      const { email, password } = await loginCheck.validate(req.body);

      const account = await Account.findByEmail(email);
      if (!account) {
        throw Error('no account with email found');
      }

      if (!(await bcrypt.compare(password, account.password))) {
        throw Error('invalid password');
      }

      res.locals.account = { ...account };
      delete res.locals.account.password;

      return next();
    } catch (err) {
      next(err);
    }
  };

  saveSession: RequestHandler = (req, res, next) => {
    (req.session as any).userId = res.locals.account.id;
    next();
  };
}

export const accountController = new AccountController();
