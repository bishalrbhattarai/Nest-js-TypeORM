import { Module } from "@nestjs/common";
import { Module1Service } from "./module1.service";

@Module({
    imports: [],
    controllers: [],
    providers: [ Module1Service ],
    exports: [ Module1Service ]
})
export class Module1Module{}