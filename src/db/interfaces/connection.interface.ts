import { QueryBuilder } from './query-builder.interface';

export interface Connection extends Queryable {
  createTransaction: () => Promise<Transaction>;
}

export interface Transaction {
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
}

interface Queryable {
  query: (tableName: string, options?: any) => QueryBuilder;
}
