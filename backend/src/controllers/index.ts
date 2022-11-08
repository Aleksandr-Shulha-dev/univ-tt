import { NextFunction, Request, Response } from 'express';

export const getPlayers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

  } catch(error) {
    next(error);
  }
}