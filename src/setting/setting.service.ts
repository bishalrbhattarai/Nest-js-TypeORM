import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { OwnerService } from './../owner/owner.service';

@Injectable()
export class SettingService {

    constructor(
        @InjectRepository(Setting)
        private readonly settingRepository: Repository<Setting>,
        private readonly ownerService: OwnerService){}


   async create( ownerId:number,CreateSettingDto: CreateSettingDto) {
            try {
                        const owner = await this.ownerService.findOne(ownerId);
                        if (!owner) {
                            throw new HttpException('Owner not found', 404);
                        }
                        const newSetting = this.settingRepository.create(CreateSettingDto);
                        newSetting.owner = owner; // set the owner relation
                        return this.settingRepository.save(newSetting);


            } catch (error) {
                console.error('Error creating setting:', error);
                throw new HttpException('Failed to create setting', 500);
            }    

    }

    findAll() {
        return this.settingRepository.find({
            relations: {
                owner: true
            }
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} setting`;
    }

  

    update(id: number) {
        return `This action updates a #${id} setting`;
    }

    remove(id: number) {
        return `This action removes a #${id} setting`;
    }

}
