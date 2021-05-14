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
      password: '$2b$10$QWVqIgTxl2468RVRikFZwuT1RV3F4WUbAZMfl/GzSdvLgYzUxy0a6',
    },
    {
      userId: '1',
      username: 'user',
      password: '$2b$10$59V6GWP/zYRYeDqZm.WBzuX5tZfjnAqGr9bgwVoqL5HD24Q/OdM3e',
    },
  ]

  async findOne(username: string): Promise<UserWithPassword | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
