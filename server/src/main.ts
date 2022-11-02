import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnv } from './general/helpers';
import { EnvKeys } from './general/enums';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(getEnv(EnvKeys.ServerPort));
}
bootstrap();
