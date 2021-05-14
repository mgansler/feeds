import { Injectable } from '@nestjs/common'

export type User = {
  userId: string
  username: string
}

type UserWithPassword = User & {
  password: string
}

@Injectable()
export class UserService {
  private readonly users: UserWithPassword[] = [
    {
      userId: '0',
      username: 'root',
      password: 'super_secret',
    },
    {
      userId: '1',
      username: 'user',
      password: 'just_secret',
    },
  ]

  async findOne(username: string): Promise<UserWithPassword | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
