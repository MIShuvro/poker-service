import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokerService } from '../service/pocker.service';

@ApiTags('Poker')
@Controller({ path: 'pokers' })
export class PokerController {
  constructor(private pokerService: PokerService) {}

  @Get()
  async sendMessage() {
    await this.pokerService.sendMessage();
  }
}
