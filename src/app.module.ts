import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PropertyModule } from './property/property.module';
import { PropertyFeatureModule } from './property-feature/property-feature.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [DatabaseModule,
     PropertyModule, PropertyFeatureModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }


