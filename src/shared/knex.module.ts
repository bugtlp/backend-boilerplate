/* eslint-disable @typescript-eslint/no-explicit-any */
import { Module } from '@nestjs/common';
import * as Knex from 'knex';

require('dotenv').config();

const knexFactory = {
  provide: 'Knex',
  useFactory: (): Knex => {
    const config: Knex.Config = {
      client: 'pg',
      connection: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER,
      },
      pool: {
        afterCreate: (conn: any, done: (err?: Error, conn?: any) => void): void => {
          conn.query('SET timezone="UTC";', (err: Error) => done(err, conn));
        },
      },
    };

    return Knex(config);
  },
};

@Module({
  exports: [knexFactory],
  providers: [knexFactory],
})
export class KnexModule {}
