import { NextFunction, Request, Response } from 'express';
import { getFakePlayer } from '../services';
import { createStreamString } from '../helper'

export const getPlayers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const closeConnection = () => {
      clearInterval(intervalId);
      res.end();
    }

    const stream = (maxCount: number) => {
      let count = 0;
      return () => {
        if(count > maxCount) {
          res.write(createStreamString());
          closeConnection();
          return;
        }
        const data = getFakePlayer();
        res.write(createStreamString(data))
        count++;
      }
    }

    let intervalId = setInterval(stream(6), 3000);
    res.on('close', closeConnection);

  } catch(error) {
    next(error);
  }
}