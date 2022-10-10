import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQService } from 'src/common/rabbit-mq/service/rabbit-mq.service';

@Injectable()
export class PokerService implements OnModuleInit {
  constructor(private rabbitMQService: RabbitMQService) {}

  async onModuleInit() {
    console.log('----------------');
    setTimeout(async () => {
      await this.rabbitMQService.publish(
        process.env.RABBIT_MQ_POCKER_EXCHANGE,
        process.env.RABBIT_MQ_POCKER_ROUTING_KEY,
        { name: 'shuvro1' }
      );
    }, 10000);
  }
}
