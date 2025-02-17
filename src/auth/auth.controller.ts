import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ZodSerializerDto } from 'nestjs-zod';
import { LoginResponseDTO } from './dto/login-response.dto';

/**
 * Auth login for users
 * - username & password
 * - response (jwt_token)
 */

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //applying serializer on login method -> it validate the response
  @ZodSerializerDto(LoginResponseDTO)
  @Post('login')
  async login(@Body() payload: LoginDTO) {
    const { access_token } = await this.authService.login({ ...payload });

    return { success: true, message: `Login successful`, access_token };
  }
}
