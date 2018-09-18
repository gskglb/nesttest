import express = require('express');
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const instance = express();
  instance.use(bodyParser.json());

  const app = await NestFactory.create(AppModule, instance, {
    logger: console,
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
