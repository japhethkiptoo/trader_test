import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PasswordUtility } from 'src/common/utils/password.utility';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth.module';

describe('AuthService', () => {
  let authService: AuthService;

  //load modules(setup)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [AuthService, UserService, PasswordUtility, JwtService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it(`Should validate user & login - generate access_toke`, async () => {
    const username = 'master',
      password = 'password';

    const result = await authService.login({ username, password });

    expect(result).toEqual({
      access_token: expect.any(String),
    });
  });

  it(`Should throw an exception on wrong password`, async () => {
    const username = 'master',
      password = 'wrong_password';

    const result = await authService.login({ username, password });

    expect(result).toThrow();
  });

  it(`Should throw an exception on wrong username`, async () => {
    const username = 'wrong_username',
      password = 'password';

    const result = await authService.login({ username, password });

    expect(result).toThrow();
  });
});
