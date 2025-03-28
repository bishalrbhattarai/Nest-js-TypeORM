import { Int, ObjectType } from "@nestjs/graphql";
import { Field, ID } from "@nestjs/graphql";

@ObjectType()
export class UserSetting{
  
    @Field(() => Int)
    id: string;

    @Field(()=>Int)
    userId: number

    @Field()
    theme?: string;

    @Field()
    notificationsEnabled: boolean;

}
