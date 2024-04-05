import { Mongoose } from 'mongoose';

export class DatabaseSetup {
  constructor(private database: Mongoose, private databaseUrl: string) {}

  public async connect(): Promise<void> {
    try {
      await this.database.connect(this.databaseUrl);
      console.log('Database connected');
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }
}
