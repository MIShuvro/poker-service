import { Module } from '@nestjs/common';
import { RabbitMQModule } from 'src/common/rabbit-mq/rabbit-mq.module';
import { PokerConsumerService } from './consumer/consumer.service';
import { PokerService } from './service/pocker.service';

@Module({
  imports: [RabbitMQModule],
  providers: [PokerConsumerService, PokerService],
})
export class PokerModule {}
