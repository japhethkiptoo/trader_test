import { Module } from '@nestjs/common';
import { PasswordUtility } from './password.utility';

/**
 *
 * All common utilities will be loaded & exported here
 */

@Module({
  providers: [PasswordUtility],
  exports: [PasswordUtility],
})
export class UtilsModule {}
