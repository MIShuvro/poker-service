import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQService } from 'src/common/rabbit-mq/service/rabbit-mq.service';

@Injectable()
export class PokerService {
  constructor(private rabbitMQService: RabbitMQService) {}

  async sendMessage() {
    console.log('hit===========');
    await this.rabbitMQService.publish(
      process.env.RABBIT_MQ_POCKER_EXCHANGE,
      process.env.RABBIT_MQ_POCKER_ROUTING_KEY,
      { name: 'Arif 2' }
    );
  }
}
