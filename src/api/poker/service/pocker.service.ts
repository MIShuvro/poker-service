import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';
import { RabbitMQService } from 'src/common/rabbit-mq/service/rabbit-mq.service';

@Injectable()
export class PokerService {
  constructor(private rabbitMQService: RabbitMQService) { }

  async sendMessage() {
    await this.rabbitMQService.publish(
      AppConfigService.appConfig.RABBIT_MQ_POCKER_EXCHANGE,
      AppConfigService.appConfig.RABBIT_MQ_POCKER_ROUTING_KEY,
      { name: 'Arif 2========' }
    );
  }
}