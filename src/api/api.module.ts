import { RabbitMQModule } from './../common/rabbit-mq/rabbit-mq.module';
import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@common/database/database.module';
import { PokerModule } from './poker/poker.module';
import { AppConfigModule } from 'src/common/app-config/app-config.module';
@Module({
  imports: [
    AppConfigModule,
    IndexModule,
    PokerModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
