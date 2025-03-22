import { Args, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./UserSetting";




@ObjectType()
export class User {

    @Field(()=>Int)
    id: number;
    @Field()
  name: string;

    @Field()
  email: string;

    @Field({nullable:true})
    settings?: UserSetting;

    @Field({nullable:true})
  password?: string;
}