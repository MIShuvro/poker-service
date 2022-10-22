import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';
import { PokerService } from '../service/pocker.service';

@Injectable()
export class PokerConsumerService {
  constructor(private pokerService: PokerService) {}
  @RabbitSubscribe({
    exchange: process.env.RABBIT_MQ_POCKER_EXCHANGE,
    routingKey: process.env.RABBIT_MQ_POCKER_ROUTING_KEY,
    queue: process.env.RABBIT_MQ_POCKER_QUEUE,
  })
  public async pubSubHandler(msg: any) {
    this.pokerService.sendEmailFromRabbitMQ(msg);
  }
}
