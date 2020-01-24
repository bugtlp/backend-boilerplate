import { Injectable, Inject } from '@nestjs/common';
import * as db from '../db';

@Injectable()
export class AuthService {
  constructor(@Inject(db.CONNECTION_SERVICE_TOKEN) readonly dbConnection: db.Connection) {}

  /**
   * Find user in database by username/password
   * @param username
   * @param password
   */
  validateUser(username: string, password: string): Promise<any> {
    // Template request to database
    return this.dbConnection
      .query('users')
      .first('*')
      .where({ name: username, password });
  }
}
