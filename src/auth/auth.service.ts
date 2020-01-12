import { Injectable, Inject } from '@nestjs/common';
import { db } from '../shared';

@Injectable()
export class AuthService {
  constructor(@Inject(db.Connection) readonly queryBuilder: db.QueryBuilder) {}

  /**
   * Find user in database by username/password
   * @param username
   * @param password
   */
  async validateUser(username: string, password: string): Promise<any> {
    // Template request to database
    return this.queryBuilder('users')
      .first('*')
      .where({ name: username, password });
  }
}
