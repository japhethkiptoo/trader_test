import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSeeder } from './user.seeder';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UtilsModule } from 'src/common/utils/utils.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), UtilsModule],
  controllers: [UserController],
  providers: [UserService, UserSeeder],
  exports: [UserService],
})
export class UserModule {}
