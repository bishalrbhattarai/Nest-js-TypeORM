import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';

@Controller('setting')
export class SettingController {

    constructor(private readonly settingService: SettingService){}

    @Get()
    findAll() {
        return this.settingService.findAll();
    }
    @Post()
    create(@Body("id",ParseIntPipe) id:number, @Body() createSettingDto: CreateSettingDto) {
        return this.settingService.create(id,createSettingDto);
    }

}
