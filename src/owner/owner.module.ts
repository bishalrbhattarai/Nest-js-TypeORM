import { Module } from '@nestjs/common';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { OwnerResolver } from './owner.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Owner])],
  controllers: [OwnerController],
  providers: [OwnerService,OwnerResolver],
  exports:[OwnerService,OwnerResolver]
})
export class OwnerModule {}
