import { HttpException, Injectable } from '@nestjs/common';
import { CreatePropertyFeatureDto } from './dto/create-property-feature.dto';
import { UpdatePropertyFeatureDto } from './dto/update-property-feature.dto';
import { PropertyFeature } from './entities/property-feature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyService } from 'src/property/property.service';

@Injectable()
export class PropertyFeatureService {

  constructor(private readonly propertyService : PropertyService,
    @InjectRepository(PropertyFeature)
    private propertyFeatureRepository: Repository<PropertyFeature>){}

  async create(createPropertyFeatureDto: CreatePropertyFeatureDto) {
    try {
      const property = await this.propertyService.findOne(createPropertyFeatureDto.propertyId);

      if(!property) {
        throw new HttpException('Property not found', 404);
      }
      const newPropertyFeature = this.propertyFeatureRepository.create({...createPropertyFeatureDto, property});

      const savedPropertyFeature = await this.propertyFeatureRepository.save(newPropertyFeature);
      
      return savedPropertyFeature;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  findAll() {
    return `This action returns all propertyFeature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyFeature`;
  }

  update(id: number, updatePropertyFeatureDto: UpdatePropertyFeatureDto) {
    return `This action updates a #${id} propertyFeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyFeature`;
  }
}
