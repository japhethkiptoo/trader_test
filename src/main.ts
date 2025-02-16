import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //prefix apis with /api
  app.setGlobalPrefix('api');

  // get config service
  const config = app.get(ConfigService);

  const port = config.get<number>('port')!;

  // start server
  await app.listen(port);
}

bootstrap();
