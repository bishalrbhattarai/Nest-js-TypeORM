import { Args, Field, InputType, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import {  faker } from '@faker-js/faker';

    @InputType()
    export class CreateUserInput{
        @Field()
        username:string;

        @Field()
        displayName:string;
    }

    const users = Array.from({length:10},(_:any,index:number)=>{

        return {
            id: index+1,
            username: faker.internet.username(),
            displayName:faker.person.fullName(),
        }

    })

    export const userSettings = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        userId: i + 1,
        theme: i % 2 === 0 ? 'dark' : 'light',
        notificationsEnabled: i % 2 === 0,
    }));


@Resolver(()=> User)
export class UserResolver {

    @Query(()=> [User], {name: 'users',nullable:true})
    users(){
        return users
    }

    @ResolveField(()=> User)
    userSetting(@Parent() user:User){
        return userSettings.find(setting=>setting.userId===user.id)
    }

    @Mutation(()=> User, {name: 'createUser',nullable:true})
    createUser(@Args("input",{nullable:true}) input : CreateUserInput ){
        const newUser = {
            id: users.length+1,
            ...input
        }
        users.push(newUser)
        return newUser as User

    }

    @Query(()=> User, {name: 'user',nullable:true})
    user(@Args("id",{type:()=>Int}) id:number){
        return users.find(user=>user.id===id)
    }

}
