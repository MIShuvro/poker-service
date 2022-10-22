import { Global, Module } from '@nestjs/common';
import { RabbitMQModule as MQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';
import { RabbitMQService } from './service/rabbit-mq.service';
import { AppConfigService } from '../app-config/service/app-config.service';

@Global()
@Module({
  imports: [
    MQModule.forRootAsync(MQModule, {
      inject: [AppConfigService],
      useFactory: () => {
        return {
          uri: AppConfigService.appConfig.RABBIT_MQ_URL,
          connectionInitOptions: { wait: false },
        };
      },
    }),
  ],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
