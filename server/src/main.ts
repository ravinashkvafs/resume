import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.use(express.static(join(process.cwd(), './public')));
  app.use('/', express.static(join(__dirname, '../public'), { etag: false }));

  // console.log(join(process.cwd(), './public'))

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
