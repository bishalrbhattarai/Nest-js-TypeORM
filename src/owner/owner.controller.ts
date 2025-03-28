import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Controller('owner')
export class OwnerController {

    constructor(private readonly ownerService: OwnerService) {}

    @Get()
    findAll(){
        return this.ownerService.findAll();
    }

    @Get(":id")
    findOne(@Param("id",ParseIntPipe) id: number){
        return this.ownerService.findOne(id);
    }

    @Post()
    create(@Body() createOwnerDto: CreateOwnerDto){
        return this.ownerService.create(createOwnerDto);
    }

}
