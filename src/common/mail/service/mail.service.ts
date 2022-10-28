import { Logger } from '@nestjs/common';
import * as juice from 'juice';
import { createTransport } from 'nodemailer';
import { renderFile } from 'pug';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';
import * as AWS from 'aws-sdk';
export class MailService {
  public ses: AWS.SES;
  constructor() {
    AWS.config.update({ region: process.env.AWS_REGION });
    this.ses = new AWS.SES({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
      apiVersion: process.env.AWS_API_VERSION,
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
    var params = {
      Destination: {
        ToAddresses: [dto.to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: this.generateHTML(dto.mail_template_type, dto),
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'This is the message body in text format.',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test email',
        },
      },
      Source: process.env.SES_EMAIL_SOURCE,
    };

    let info = await this.ses.sendEmail(params).promise();
    Logger.log('Message sent: ' + info.MessageId, 'MailService/sendMail');
  }

  private generateHTML(template, params = {}) {
    const html = renderFile(`${process.cwd()}/mail-templates/${template}.pug`, params);
    return juice(html);
  }
}
