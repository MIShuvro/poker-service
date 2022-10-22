import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/common/app-config/app-config.module';
import { MailModule } from 'src/common/mail/mail.module';
import { RabbitMQModule } from 'src/common/rabbit-mq/rabbit-mq.module';
import { PokerConsumerService } from './consumer/consumer.service';
import { PokerController } from './controller/poker.controller';
import { PokerService } from './service/pocker.service';

@Module({
  imports: [AppConfigModule, MailModule],
  providers: [PokerConsumerService, PokerService],
  controllers: [PokerController],
})
export class PokerModule {}
