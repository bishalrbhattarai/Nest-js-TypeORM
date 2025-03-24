import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            url:"postgresql://nest-js-prac_owner:npg_Ctl1LKOfbsa8@ep-lively-lab-a5kje2f0-pooler.us-east-2.aws.neon.tech/nest-js-prac?sslmode=require",
            type: 'postgres',
            entities: [ __dirname + '/../**/*.entity{.ts,.js}',
                         __dirname + '/**/*.entity{.ts,.js}'
                      ],
            synchronize: true
        })                       
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule] 
})
export class DatabaseModule{}