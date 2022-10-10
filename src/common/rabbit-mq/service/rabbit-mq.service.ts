import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMQService {
  constructor(private amqpConnection: AmqpConnection) {}

  async publish(exchange: string, routingKey, message: any) {
    await this.amqpConnection.publish(exchange, routingKey, message);
  }
}
