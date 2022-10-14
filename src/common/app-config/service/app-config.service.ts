import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EnvironmentVariables } from "../environment";

@Injectable()
export class AppConfigService {
    public static appConfig: EnvironmentVariables

    constructor(private configService: ConfigService<EnvironmentVariables>) {
        AppConfigService.appConfig = {
            PORT: this.configService.get('PORT', 3000, { infer: true }),
            SWAGGER_USERNAME: this.configService.get('SWAGGER_USERNAME'),
            SWAGGER_PASSWORD: this.configService.get('SWAGGER_PASSWORD'),
            RABBIT_MQ_URL: this.configService.get('RABBIT_MQ_URL'),
            RABBIT_MQ_POCKER_EXCHANGE: this.configService.get('RABBIT_MQ_POCKER_EXCHANGE'),
            RABBIT_MQ_POCKER_ROUTING_KEY: this.configService.get('RABBIT_MQ_POCKER_ROUTING_KEY'),
            RABBIT_MQ_POCKER_QUEUE: this.configService.get('RABBIT_MQ_POCKER_QUEUE')
        }
    }
}