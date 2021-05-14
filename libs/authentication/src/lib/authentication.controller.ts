import { Controller, Post, Request, UseGuards } from '@nestjs/common'

import { LocalAuthGuard } from './local-auth.guard'

@Controller('authentication')
export class AuthenticationController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return req.user
  }
}
