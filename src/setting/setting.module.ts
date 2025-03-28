import { Module } from '@nestjs/common';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';
import { OwnerModule } from 'src/owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { SettingResolver } from './setting.resolver';

@Module({
  imports: [OwnerModule,TypeOrmModule.forFeature([Setting])],
  controllers: [SettingController],
  providers: [SettingService,SettingResolver],
  exports:[SettingService,SettingResolver]
})
export class SettingModule {}
