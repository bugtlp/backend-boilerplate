import { Module, Global } from '@nestjs/common';

import { connectionProvider } from './connection.provider';

@Global()
@Module({
  providers: [connectionProvider],
  exports: [connectionProvider],
})
export class DbModule {}
