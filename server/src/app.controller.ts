import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/doc/:folder/:file')
  getDoc(@Param('folder') folder, @Param('file') file, @Res() res) {
    res.sendFile(resolve(`./${folder}/${file}`));
  }
}
