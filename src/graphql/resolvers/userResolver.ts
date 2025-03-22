import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { UserSetting } from "../models/UserSetting";


export const dummyUsers = [
    { id: 1, name: 'User One', email: 'userone@example.com', password: 'password1' },
    { id: 2, name: 'User Two', email: 'usertwo@example.com', password: 'password2' },
    { id: 3, name: 'User Three', email: 'userthree@example.com' },
    { id: 4, name: 'User Four', email: 'userfour@example.com', password: 'password4' },
    { id: 5, name: 'User Five', email: 'userfive@example.com' },
];

export const dummyUserSettings = [
    { userId: 1, receiveEmails: true, receiveNotifications: false },
    { userId: 2, receiveEmails: false, receiveNotifications: true },
    { userId: 3, receiveEmails: true, receiveNotifications: true },
    { userId: 4, receiveEmails: false, receiveNotifications: false },
    { userId: 5, receiveEmails: true, receiveNotifications: false },
];

@Resolver(() => User)
export class UserResolver {
    @Query(()=>User) 
    getUser(@Args('id' ,{type: ()=>Int }) id:number ){
        return dummyUsers.find(user => user.id === id);   
    }

    @Query(()=>[User]) 
    getUsers(){
        return dummyUsers   
    }    
    
       
    @ResolveField(()=>UserSetting)
    settings(@Parent() user:User){
return dummyUserSettings.find(setting => setting.userId === user.id);
    }
}