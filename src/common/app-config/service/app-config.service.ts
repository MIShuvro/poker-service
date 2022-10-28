import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../environment';

@Global()
@Injectable()
export class AppConfigService {
  public static appConfig: EnvironmentVariables;

  constructor(private configService: ConfigService<EnvironmentVariables>) {
    AppConfigService.appConfig = {
      PORT: this.configService.get('PORT', 3000, { infer: true }),
      SWAGGER_USERNAME: this.configService.get('SWAGGER_USERNAME'),
      SWAGGER_PASSWORD: this.configService.get('SWAGGER_PASSWORD'),
      RABBIT_MQ_URL: this.configService.get('RABBIT_MQ_URL'),
      RABBIT_MQ_POCKER_EXCHANGE: this.configService.get('RABBIT_MQ_POCKER_EXCHANGE'),
      RABBIT_MQ_POCKER_ROUTING_KEY: this.configService.get('RABBIT_MQ_POCKER_ROUTING_KEY'),
      RABBIT_MQ_POCKER_QUEUE: this.configService.get('RABBIT_MQ_POCKER_QUEUE'),
      SES_HOST: this.configService.get('SES_HOST'),
      SES_PORT: this.configService.get('SES_PORT', 587, { infer: true }),
      SES_USER: this.configService.get('SES_USER'),
      SES_EMAIL_SOURCE: this.configService.get('SES_EMAIL_SOURCE'),
      SES_PASSWORD: this.configService.get('SES_PASSWORD'),
      AWS_ACCESS_KEY: this.configService.get('AWS_ACCESS_KEY'),
      AWS_SECRET_KEY: this.configService.get('AWS_SECRET_KEY'),
      AWS_REGION: this.configService.get('AWS_REGION'),
      AWS_API_VERSION: this.configService.get('AWS_API_VERSION'),
    };
  }
}
