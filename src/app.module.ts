import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';


@Module({
  imports: [DatabaseModule, UsersModule, ProfilesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }


