import { Injectable } from '@nestjs/common'

import { User, UserService } from '@feeds/user'

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const userWithPassword = await this.userService.findOne(username)
    if (userWithPassword && userWithPassword.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = userWithPassword
      return user
    }

    return null
  }
}
