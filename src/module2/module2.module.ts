import { Module } from "@nestjs/common";
import { Module1Module } from "src/module1/module1.module";
import { Module2Controller } from "./module2.controller";

@Module({
    imports: [Module1Module],
    controllers: [Module2Controller],
    providers: [],
})
export class Module2Module{}