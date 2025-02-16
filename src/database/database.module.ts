import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

/**
 * Configuring Database connnection (postgresql)
 * autoloading models - registered as feature models (sequelize.forFeature)
 */

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        autoLoadModels: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
