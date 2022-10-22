import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';
import { MailService } from 'src/common/mail/service/mail.service';
import { RabbitMQService } from 'src/common/rabbit-mq/service/rabbit-mq.service';

@Injectable()
export class PokerService {
  constructor(private rabbitMQService: RabbitMQService, private mailService: MailService) {}

  async sendMessage(dto) {
    await this.rabbitMQService.publish(
      AppConfigService.appConfig.RABBIT_MQ_POCKER_EXCHANGE,
      AppConfigService.appConfig.RABBIT_MQ_POCKER_ROUTING_KEY,
      dto
    );
  }

  sendEmailFromRabbitMQ(data: {
    from: string;
    to: string;
    name: string;
    mail_template_type: string;
    body?: string;
    code?: string;
  }) {
    this.mailService.sendMail(data);
  }
}
