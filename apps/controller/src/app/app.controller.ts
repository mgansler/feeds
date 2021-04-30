import { Body, Controller, Post } from '@nestjs/common'

import { AppService } from './app.service'
import { AddWebsiteDto } from '../dto/add-website.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addWebsite(@Body() addWebsiteDto: AddWebsiteDto) {
    return this.appService.addWebsite(addWebsiteDto)
  }
}