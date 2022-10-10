import { Global, Module } from '@nestjs/common';
import { RabbitMQModule as MQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';
import { RabbitMQService } from './service/rabbit-mq.service';

@Global()
@Module({
  imports: [
    MQModule.forRootAsync(MQModule, {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('RABBIT_MQ_URL'),
        connectionInitOptions: { wait: false },
      }),
    }),
  ],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
