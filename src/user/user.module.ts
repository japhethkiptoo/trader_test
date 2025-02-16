import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSeeder } from './user.seeder';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UtilsModule } from 'src/common/utils/utils.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), UtilsModule],
  providers: [UserService, UserSeeder],
  exports: [UserService],
})
export class UserModule {}
