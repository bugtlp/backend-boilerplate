import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
