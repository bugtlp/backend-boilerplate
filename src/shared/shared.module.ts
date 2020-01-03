import { Module, Global } from '@nestjs/common';
import { knexProvider } from './services/knex.service';

@Global()
@Module({
  exports: [knexProvider],
  providers: [knexProvider],
})
export class SharedModule {}
