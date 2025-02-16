import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findUserByUsername(username: string): Promise<User | null> {
    try {
      return await this.userModel.findOne({
        where: {
          username,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
