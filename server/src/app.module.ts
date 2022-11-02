import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './records/records.module';
import { ConfigModule } from '@nestjs/config';
import { getEnv } from './general/helpers';
import { EnvKeys } from './general/enums';

@Module({
  imports: [ConfigModule.forRoot(), RecordsModule, MongooseModule.forRoot(getEnv(EnvKeys.DatabaseUrl))],
})
export class AppModule {}
