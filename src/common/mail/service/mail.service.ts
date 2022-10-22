import { Logger } from '@nestjs/common';
import * as juice from 'juice';
import { createTransport } from 'nodemailer';
import { renderFile } from 'pug';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';
export class MailService {
  private transport() {
    return createTransport({
      host: AppConfigService.appConfig.SMTP_HOST,
      port: AppConfigService.appConfig.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: AppConfigService.appConfig.SMTP_USER, // generated ethereal user
        pass: AppConfigService.appConfig.SMTP_PASSWORD,
      },
    });
  }

  async sendMail(dto: {
    from: string;
    to: string;
    name: string;
    mail_template_type: string;
    body?: string;
    code?: string;
  }) {
    const info = await this.transport().sendMail({
      from: dto.from,
      to: dto.to,
      subject: 'Hello From Poker Service',
      html: this.generateHTML(dto.mail_template_type, dto),
    });

    Logger.log('Message sent: ' + info.messageId, 'MailService/sendMail');
  }

  private generateHTML(template, params = {}) {
    const html = renderFile(`${process.cwd()}/mail-templates/${template}.pug`, params);
    return juice(html);
  }
}
