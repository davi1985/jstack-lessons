import { Express } from 'express';

export class ServerSetup {
  constructor(private app: Express, private port: number) {}

  public setup(): void {
    this.app.listen(
      this.port,
      console.log.bind(
        this,
        `🚀 Server running on http://localhost:${this.port}`
      )
    );
  }
}
