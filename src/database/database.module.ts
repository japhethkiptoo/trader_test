import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseConfig } from 'src/interfaces/config.interface';

/**
 * Configuring Database connnection (postgresql)
 * autoloading models - registered as feature models (sequelize.forFeature)
 */

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const {
          host,
          port,
          user: username,
          pass: password,
          name: database,
          schema,
        } = config.get<DatabaseConfig>('database')!;

        return {
          dialect: 'postgres',
          host,
          port,
          username,
          password,
          database,
          schema,
          autoLoadModels: true,
          logging: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
