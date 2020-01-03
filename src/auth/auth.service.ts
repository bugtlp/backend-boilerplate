import { Injectable, Inject } from '@nestjs/common';
import * as Knex from 'knex';

@Injectable()
export class AuthService {
  constructor(@Inject('Knex') readonly knex: Knex) {}

  /**
   * Find user in database by username/password
   * @param username
   * @param password
   */
  async validateUser(username: string, password: string): Promise<any> {
    // Template request to database
    return this.knex('users')
      .first('*')
      .where({ name: username, password });
  }
}
