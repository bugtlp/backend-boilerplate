# Backend Boilerplate

## Description

Back-end starter repository based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Settings

Create .env file in project root directory with:

```bash
DB_NAME=sample_db_name
DB_HOST=127.0.0.1
DB_USER=sample_db_user
DB_PASSWORD=sample_db_password
DB_PORT=5431
PORT=3000
```

PORT - Port of backend api

DB_HOST - Host of database. Default `127.0.0.1` or `localhost`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build && npm run start:prod
```

## Running the app via docker-compose

After .env created:

```bash
$ docker-compose up
```

By default will be created `pg_data` directory with database.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
