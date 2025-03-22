 
 import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { ParseIntPipe } from "@nestjs/common";


@Resolver()
export class UserResolver {
  
    @Query(()=>User) 
    
    getUser(@Args('id' ,{type: ()=>Int }) id:number ){
        return {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
    }
    
}