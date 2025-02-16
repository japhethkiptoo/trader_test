import { HttpException, Injectable } from '@nestjs/common';
import { LoginDTOType } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { PasswordUtility } from 'src/common/utils/password.utility';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private passwordUtil: PasswordUtility,
    private jwtService: JwtService,
  ) {}

  async login(payload: LoginDTOType): Promise<{ access_token: string }> {
    try {
      const { username, password } = payload;
      //lookup the user using username
      const user = await this.userService.findUserByUsername(username);

      if (!user) throw new HttpException('User not found', 404);

      //validate password
      const isValidPassword = await this.passwordUtil.isValidPassword(
        password,
        user.password,
      );

      //If no match - throw an error
      if (!isValidPassword) {
        throw new HttpException('Invalid credentials', 401);
      }

      //tokenize
      const access_token = this.jwtService.sign({
        username: user.username,
        sub: String(user.id),
      });

      return { access_token };
    } catch (e) {
      throw e;
    }
  }
}
