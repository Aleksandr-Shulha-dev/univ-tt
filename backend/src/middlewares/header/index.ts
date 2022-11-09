import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';

const setHeaderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
    };
    res.writeHead(httpStatus.OK, headers);
    next();
  } catch (error) {
    next(error)
  }
}

export { setHeaderMiddleware }