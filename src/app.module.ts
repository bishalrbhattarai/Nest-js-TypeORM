import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { OwnerModule } from './owner/owner.module';


@Module({
  imports: [DatabaseModule,OwnerModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver:ApolloDriver,
        autoSchemaFile:"src/schema.gql",
        debug: true,
        playground: true,
      }),
      UserModule,
      OwnerModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}


