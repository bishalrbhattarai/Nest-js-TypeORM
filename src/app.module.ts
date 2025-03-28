import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OwnerModule } from './owner/owner.module';
import { SettingModule } from './setting/setting.module';


@Module({
  imports: [DatabaseModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver:ApolloDriver,
        autoSchemaFile:"src/schema.gql",
        debug: true,
        playground: true,
      }),
      OwnerModule,
      SettingModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}


