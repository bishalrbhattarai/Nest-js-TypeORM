import { HttpException, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PropertyService {

  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    private readonly userService: UserService
  ) { }

  async create(createPropertyDto: CreatePropertyDto) {
    try {
      const user = await this.userService.findOne(createPropertyDto.userId);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      
      const property = await this.propertyRepository.save({
        ...createPropertyDto,
        user: user
      });
      
      return property;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return this.propertyRepository.find({
      relations: ['user']
    });
  }

  findOne(id: number) {
    return this.propertyRepository.findOneBy({ id });
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertyRepository.update({ id }, updatePropertyDto);
  }

  remove(id: number) {
    return this.propertyRepository.delete({ id });
  }
}
