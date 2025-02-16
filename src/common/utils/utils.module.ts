import { Module } from '@nestjs/common';
import { PasswordUtility } from './password.utility';
import { PaginationUtility } from './pagination.utility';

/**
 *
 * All common utilities will be loaded & exported here
 */

@Module({
  providers: [PasswordUtility, PaginationUtility],
  exports: [PasswordUtility, PaginationUtility],
})
export class UtilsModule {}
