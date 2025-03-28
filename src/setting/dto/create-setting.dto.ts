import { Field, InputType } from "@nestjs/graphql";

@InputType() 
export class CreateSettingDto{
    @Field(()=> Boolean,{nullable: true})
    notification: boolean;
    @Field(()=> Boolean,{nullable: true})
    darkMode: boolean;
}