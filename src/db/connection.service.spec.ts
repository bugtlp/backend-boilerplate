import * as Knex from 'knex';
import * as mockDb from 'mock-knex';
import { ConnectionService, TransactionService } from './connection.service';
import { Transaction } from './interfaces';

describe('ConnectionService', () => {
  let service: ConnectionService;
  let knex: Knex;

  beforeEach(() => {
    knex = Knex({ client: 'pg' });
    mockDb.mock(knex);
    service = new ConnectionService(knex);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create transaction', async () => {
    const trxFactorySpy = jest.spyOn(knex, 'transaction');
    const trx = await service.createTransaction();
    expect(trxFactorySpy).toBeCalled();
    expect(trx).toBeInstanceOf(TransactionService);
  });

  it('should give query builder', () => {
    expect(service.query).toBeInstanceOf(Function);
    const builder = service.query();
    const builderMethods = ['select', 'insert', 'del', 'update'];
    builderMethods.forEach(method => {
      expect(builder[method]).toBeInstanceOf(Function);
    });
  });
});

describe('TransactionService', () => {
  let service: TransactionService;
  let trx: Transaction;
  let queryBuilderMock: jest.Mock<Function>;

  beforeEach(() => {
    trx = {
      commit: jest.fn(),
      rollback: jest.fn(),
    };
    queryBuilderMock = jest.fn();
    service = new TransactionService(trx, queryBuilderMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should commit', async () => {
    await service.commit();
    expect(trx.commit).toBeCalled();
  });

  it('should rollback', async () => {
    await service.rollback();
    expect(trx.rollback).toBeCalled();
  });

  it('should give query builder', () => {
    service.query();
    expect(queryBuilderMock).toBeCalled();
  });
});
