import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Get("/")
    private findAll(){
        return ["all users"]
    }

    @Get("posts/comments")
    private findComments(){
        return ["all comments"]
    }

    @Post()
    private create(@Body() body : {name:string}){
        return {
            id:Math.floor(Math.random()*10),
            data:body
        }
    }

}
