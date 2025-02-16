import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { PasswordUtility } from 'src/common/utils/password.utility';

/**
 * We will be using this service to handle seeding for user data -> master/follower
 * this will only be used when we do not have any users
 * it will execute on module init (bootstrapping of the application)
 */

@Injectable()
export class UserSeeder implements OnModuleInit {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private passwordService: PasswordUtility,
  ) {}

  async onModuleInit() {
    //Check if we have no users and seed
    const user_count = await this.userModel.count();

    if (user_count == 0) {
      await this.seed();
    }
  }

  async seed() {
    try {
      // Using the passwordutility to hash password
      const password = await this.passwordService.hashPassword('password');

      const users: Partial<User>[] = [
        {
          name: 'Master',
          role: 'master',
          username: 'master',
          password,
        },
        {
          name: 'Trader',
          role: 'trader',
          username: 'trader',
          password,
        },
        {
          name: 'Follower',
          role: 'follower',
          username: 'follower',
          password,
        },
      ];

      await this.userModel.bulkCreate(users);

      Logger.log(`Users seeded successfully!`);
    } catch (e) {
      Logger.error(`Error seeding Users:`, e);
    }
  }
}
