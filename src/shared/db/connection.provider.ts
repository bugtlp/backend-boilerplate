/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex';

import { DB_CONNECTION } from './constants';

require('dotenv').config();

const defaultConnectionConfig = {
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
};

export function connectionFactory(connectionConfig: Knex.PgConnectionConfig = defaultConnectionConfig): Knex {
  const config: Knex.Config = {
    client: 'pg',
    connection: connectionConfig,
    pool: {
      afterCreate: (conn: any, done: (err?: Error, conn?: any) => void): void => {
        conn.query('SET timezone="UTC";', (err: Error) => done(err, conn));
      },
    },
  };

  return Knex(config);
}

export const connectionProvider = {
  provide: DB_CONNECTION,
  useFactory: connectionFactory,
};
