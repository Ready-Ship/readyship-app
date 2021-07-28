import { RequestHandler } from 'express';

export const ensureAuth: RequestHandler = async (req, res, next) => {
  if (!(req.session as any).userId) {
    return next(Error('not logged in'));
  }

  res.locals.userId = (req.session as any).userId;
  return next();
};
