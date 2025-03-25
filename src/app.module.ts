import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PropertyModule } from './property/property.module';


@Module({
  imports: [DatabaseModule, PropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule { }


