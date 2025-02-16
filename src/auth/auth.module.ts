import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UtilsModule } from 'src/common/utils/utils.module';
import { ConfigService } from '@nestjs/config';
import { JWTConfig } from 'src/interfaces/config.interface';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

/**
 * Register Jsonwebtoken module
 */

@Module({
  imports: [
    UserModule,
    UtilsModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { secret, expiresIn } =
          configService.get<JWTConfig>('jwt_token')!;

        return {
          secret,
          global: true,
          signOptions: {
            expiresIn,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
