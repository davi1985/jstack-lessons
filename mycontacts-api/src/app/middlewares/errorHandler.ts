import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  error: Error,
  _: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log({
    errorName: error.name,
    message: error.message,
    stack: error.stack,
  });

  response.sendStatus(500);
};
