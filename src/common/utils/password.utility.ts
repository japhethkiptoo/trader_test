import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcrypt';

/** All password related tasks - encryption and descryption.
 * using bcrypt to handle password hashing
 */

@Injectable()
export class PasswordUtility {
  private saltRounds: number;

  constructor(private config: ConfigService) {
    this.saltRounds = config.get<number>('password_salt_rounds')!;
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, this.saltRounds);
  }

  async isValidPassword(
    plain_password: string,
    hashed_password: string,
  ): Promise<boolean> {
    return compare(plain_password, hashed_password);
  }
}
