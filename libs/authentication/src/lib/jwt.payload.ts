import { User } from '@feeds/user'

export type JwtPayload = {
  sub: User['userId']
  username: User['username']
}
