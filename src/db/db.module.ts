import { Module, Global } from '@nestjs/common';

import { connectionProvider } from './connection.provider';
import { ConnectionService } from './connection.service';

@Global()
@Module({
  providers: [connectionProvider, ConnectionService],
  exports: [connectionProvider],
})
export class DbModule {}
