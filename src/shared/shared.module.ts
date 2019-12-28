import { Module } from '@nestjs/common';
import { knexProvider } from './services/knex.service';

@Module({
  exports: [knexProvider],
  providers: [knexProvider],
})
export class SharedModule {}
