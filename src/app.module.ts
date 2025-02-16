import { Module } from '@nestjs/common';
import { TradeHistoryModule } from './trade_history/trade_history.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthModule } from './auth/auth.module';

/**
 * Add Zod schema validation pipe globally - it will use defined DTOs to validate.
 * in providers
 */

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    TradeHistoryModule,
    UserModule,
    DatabaseModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
