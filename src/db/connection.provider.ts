/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from 'knex';

import { CONNECTION_SERVICE_TOKEN } from './constants';
import { ConnectionService } from './connection.service';

require('dotenv').config();

const defaultConnectionConfig = {
  database: String(process.env.DB_NAME),
  host: String(process.env.DB_HOST),
  password: String(process.env.DB_PASSWORD),
  port: Number(process.env.DB_PORT) || 5432,
  user: String(process.env.DB_USER),
};

export function connectionFactory(
  connectionConfig: Knex.ConnectionConfig = defaultConnectionConfig,
): ConnectionService {
  const config: Knex.Config = {
    client: 'pg',
    connection: connectionConfig,
    pool: {
      afterCreate: (conn: any, done: (err?: Error, conn?: any) => void): void => {
        conn.query('SET timezone="UTC";', (err: Error) => done(err, conn));
      },
    },
  };

  return new ConnectionService(Knex(config));
}

export const connectionProvider = {
  provide: CONNECTION_SERVICE_TOKEN,
  useFactory: connectionFactory,
};
