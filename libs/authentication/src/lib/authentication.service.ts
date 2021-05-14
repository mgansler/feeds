import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { User, UserService } from '@feeds/user'

import { JwtPayload } from './jwt.payload'

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const userWithPassword = await this.userService.findOne(username)
    if (userWithPassword && userWithPassword.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = userWithPassword
      return user
    }

    return null
  }

  async login(user: User) {
    const payload: JwtPayload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
