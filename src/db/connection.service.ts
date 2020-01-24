/* eslint-disable max-classes-per-file */
import { Connection, Transaction } from './interfaces';

import Knex = require('knex');

export class TransactionService implements Transaction {
  constructor(private readonly trx: Transaction, private readonly queryBuilder: Function) {}

  commit(): Promise<void> {
    return this.trx.commit();
  }

  rollback(): Promise<void> {
    return this.trx.rollback();
  }

  get query(): Function {
    return this.queryBuilder;
  }
}

export class ConnectionService implements Connection {
  constructor(private readonly knex: Knex) {}

  async createTransaction(): Promise<TransactionService> {
    const trx = await this.knex.transaction();
    return new TransactionService(trx, trx.queryBuilder.bind(trx));
  }

  get query(): any {
    return this.knex.queryBuilder.bind(this.knex);
  }
}
