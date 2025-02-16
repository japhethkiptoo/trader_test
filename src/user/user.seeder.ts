import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

/**
 * We will be using this service to handle seeding for user data -> master/follower
 * Two users at-most
 */

@Injectable()
export class UserSeeder implements OnModuleInit {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  onModuleInit() {
    this.seed();
  }

  seed() {
    try {
      const password = 'password';

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

      const result = this.userModel.bulkBuild(users);

      console.log(result);
      Logger.log(`Users seeded successfully!`);
    } catch (e) {
      Logger.error(`Error seeding Users:`, e);
    }
  }
}
