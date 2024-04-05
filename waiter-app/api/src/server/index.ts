import { Express } from 'express';
import { Mongoose } from 'mongoose';
import { DatabaseSetup } from './DatabaseSetup';
import { MiddlewareSetup } from './MiddlewareSetup';
import { ServerSetup } from './ServerSetup';

export class Server {
  private serverSetup: ServerSetup;
  private middlewareSetup: MiddlewareSetup;
  private databaseSetup: DatabaseSetup;

  constructor(
    private app: Express,
    private database: Mongoose,
    private databaseUrl: string,
    private port = 3001
  ) {
    this.serverSetup = new ServerSetup(app, port);
    this.middlewareSetup = new MiddlewareSetup(app);
    this.databaseSetup = new DatabaseSetup(database, databaseUrl);
  }

  public async init(): Promise<void> {
    try {
      await this.databaseSetup.connect();

      this.middlewareSetup.setup();
      this.serverSetup.setup();
    } catch (error) {
      console.log(error);
    }
  }
}
