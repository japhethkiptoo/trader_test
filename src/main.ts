import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //prefix apis with /api
  app.setGlobalPrefix('api');

  //zod DTO to swagger ready with ApiProperty decorator
  patchNestJsSwagger();

  //Swagger setup
  const swaggerconfig = new DocumentBuilder()
    .setTitle('Trade History API')
    .setDescription('The Trade History API description')
    .setVersion('1.0')
    .addTag('Trade')
    .addBearerAuth()
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerconfig);

  SwaggerModule.setup('doc', app, documentFactory);

  // get config service
  const config = app.get(ConfigService);

  const port = config.get<number>('port')!;

  // start server
  await app.listen(port);
}

bootstrap();
