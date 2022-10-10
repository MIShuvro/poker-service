import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PokerConsumerService {
  //   @RabbitSubscribe({
  //     exchange: process.env.RABBIT_MQ_POCKER_EXCHANGE,
  //     routingKey: process.env.RABBIT_MQ_POCKER_ROUTING_KEY,
  //     queue: process.env.RABBIT_MQ_POCKER_QUEUE,
  //   })
  //   public async pubSubHandler(msg: any) {
  //     console.log('msg1=======', msg);
  //   }
}
