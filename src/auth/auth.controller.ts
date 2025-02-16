import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

/**
 * Auth login for users
 * - username & password
 * - response (jwt_token)
 */

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() payload: LoginDTO) {
    return this.authService.login({ ...payload });
  }
}
