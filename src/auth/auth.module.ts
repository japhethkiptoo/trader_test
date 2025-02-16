import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UtilsModule } from 'src/common/utils/utils.module';
import { ConfigService } from '@nestjs/config';
import { JWTConfig } from 'src/interfaces/config.interface';

/**
 * Register Jsonwebtoken module
 */

@Module({
  imports: [
    UserModule,
    UtilsModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { secret } = configService.get<JWTConfig>('jwt_token')!;

        return {
          secret,
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
