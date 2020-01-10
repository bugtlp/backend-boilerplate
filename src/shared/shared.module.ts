import { Module, Global } from '@nestjs/common';
import { DbModule } from './db/db.module';

@Global()
@Module({
  exports: [DbModule],
  imports: [DbModule],
})
export class SharedModule {}
