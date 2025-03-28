import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./user-setting.entity";

@ObjectType()
export class User{
    @Field(()=>ID)
    id:number;

    @Field()
    username:string;
    
    @Field()
    displayName?:string;

    @Field(()=>UserSetting)
    userSetting:UserSetting

}