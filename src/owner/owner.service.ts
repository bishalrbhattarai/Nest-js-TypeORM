import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnerService {

    constructor(
        @InjectRepository(Owner)
         private readonly ownerRepository: Repository<Owner>
        ){}

    findAll() {
        return this.ownerRepository.find();
    }

    findOne(id: number) {
        return this.ownerRepository.findOneBy({id});
    }

     create(createOwnerDto: CreateOwnerDto) {
      
        const newOwner =  this.ownerRepository.create(createOwnerDto);
       return  this.ownerRepository.save(newOwner);

   
    }

    update(id: number, updateOwnerInput: any) {
        return `This action updates a #${id} owner`;
    }

    remove(id: number) {
        return `This action removes a #${id} owner`;
    }

}
