import { Module } from '@nestjs/common';
import { PropertyFeatureService } from './property-feature.service';
import { PropertyFeatureController } from './property-feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyFeature } from './entities/property-feature.entity';
import { PropertyModule } from '../property/property.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PropertyFeature]),
    PropertyModule
  ],
  controllers: [PropertyFeatureController],
  providers: [PropertyFeatureService],
})
export class PropertyFeatureModule {}
