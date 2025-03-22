import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PropertyController } from "./property.controller";
import { PropertyMiddleware } from "./property.middleware";

@Module({
    controllers:[PropertyController],
    providers:[],
})
export class PropertyModule implements NestModule{

    configure(consumer: MiddlewareConsumer){
        consumer.apply(PropertyMiddleware).forRoutes(PropertyController);
    }

}