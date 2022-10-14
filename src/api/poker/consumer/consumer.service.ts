import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';

@Injectable()
export class PokerConsumerService {
  constructor() {
    console.log('AppConfigService', AppConfigService.appConfig);
  }
  // @RabbitSubscribe({
  //   exchange: AppConfigService.appConfig.RABBIT_MQ_POCKER_EXCHANGE,
  //   routingKey: process.env.RABBIT_MQ_POCKER_ROUTING_KEY,
  //   queue: process.env.RABBIT_MQ_POCKER_QUEUE,
  // })
  // public async pubSubHandler(msg: any) {
  //   console.log('msg1=======', msg);
  // }


}
