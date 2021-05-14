import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '@feeds/user'

import { AuthenticationService } from './authentication.service'
import { LocalStrategy } from './local.strategy'
import { AuthenticationController } from './authentication.controller'

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy],
  exports: [],
})
export class AuthenticationModule {}
