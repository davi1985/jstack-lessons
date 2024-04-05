import express, { Express } from 'express';
import { router } from '../routes';

export class MiddlewareSetup {
  constructor(private app: Express) {}

  public setup(): void {
    this.app.use(express.json());
    this.app.use(router);
  }
}
