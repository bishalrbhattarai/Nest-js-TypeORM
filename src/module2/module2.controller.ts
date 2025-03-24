import { Controller, Get, Injectable } from "@nestjs/common";
import { Module1Service } from "src/module1/module1.service";

@Controller('module2')
export class Module2Controller{

    constructor(private module1Service: Module1Service){}

    @Get()
    getHelloWorld(){
       return this.module1Service.getHello();
    }

}