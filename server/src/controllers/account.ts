import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { Account } from '../models';

const signUpCheck = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().required(),
});

export class AccountController {
  signUp: RequestHandler = async (req, res, next) => {
    try {
      const { email, password, name } = await signUpCheck.validate(req.body);

      const hash = await bcrypt.hash(password, 10);
      await Account.create({ email, password: hash, name });

      const account = await Account.findByEmail(email);
      delete account.password;
      res.locals.account = account;

      return next();
    } catch (err) {
      next(err);
    }
  };
}

export const accountController = new AccountController();
