import { Test, TestingModule } from '@nestjs/testing'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '@feeds/user'

import { AuthenticationService } from './authentication.service'

describe('AuthenticationService', () => {
  let service: AuthenticationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, PassportModule],
      providers: [AuthenticationService],
    }).compile()

    service = module.get<AuthenticationService>(AuthenticationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
