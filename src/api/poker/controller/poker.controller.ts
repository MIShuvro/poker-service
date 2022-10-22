import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMailReqDto } from '../dto/req/send-mail-req.dto';
import { PokerService } from '../service/pocker.service';

@ApiTags('Poker')
@Controller({ path: 'pokers', version: '1' })
export class PokerController {
  constructor(private pokerService: PokerService) {}

  @Post()
  async sendMessage(@Body() dto: SendMailReqDto) {
    await this.pokerService.sendMessage(dto);
  }
}
