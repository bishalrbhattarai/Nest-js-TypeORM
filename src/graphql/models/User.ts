import { Args, Field, Int, ObjectType } from "@nestjs/graphql";


export const dummyUsers: User[] = [
    { id: 1, name: 'User One', email: 'userone@example.com', password: 'password1' },
    { id: 2, name: 'User Two', email: 'usertwo@example.com', password: 'password2' },
    { id: 3, name: 'User Three', email: 'userthree@example.com' },
    { id: 4, name: 'User Four', email: 'userfour@example.com', password: 'password4' },
    { id: 5, name: 'User Five', email: 'userfive@example.com' },
];

@ObjectType()
export class User {

    @Field(()=>Int)
    id: number;
    @Field()
  name: string;

    @Field()
  email: string;

    @Field({nullable:true})
  password?: string;
}