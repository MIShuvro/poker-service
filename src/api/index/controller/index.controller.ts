import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from 'src/common/app-config/service/app-config.service';

@Controller()
export class IndexController {
  constructor() {}
  @Get()
  index() {
    return {
      app: 'Nest Boilerplate is running...',
    };
  }
}
