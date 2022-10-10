import { RabbitMQModule } from './../common/rabbit-mq/rabbit-mq.module';
import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@common/database/database.module';
import { PokerModule } from './poker/poker.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    IndexModule,
    PokerModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
