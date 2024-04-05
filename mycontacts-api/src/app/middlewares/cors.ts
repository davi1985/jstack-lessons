import { Request, Response, NextFunction } from 'express';

export const cors = (_: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '');

  next();
};
