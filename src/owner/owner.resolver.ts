import { Resolver,Query, Int, Args, Mutation } from "@nestjs/graphql";
import { Owner } from "./entities/owner.entity";
import { OwnerService } from "./owner.service";
import { GraphQLError } from "graphql";
import { CreateOwnerDto } from "./dto/create-owner.dto";


@Resolver(() => Owner)
export class OwnerResolver {

constructor(private readonly ownerService: OwnerService){}

    @Query(()=> [Owner],{name:"owners",nullable:true})
    owners(){
        return this.ownerService.findAll();
    }
    @Query(()=> Owner,{name:"owner",nullable:true})
    owner(@Args("id", {type:()=>Int}) id: number){
        if(!id) throw new GraphQLError("id is required");
        return this.ownerService.findOne(id);
    }


    

    @Mutation(()=> Owner,{name:"createOwner"})
    createOwner(@Args("input",{nullable:true}) input : CreateOwnerDto ){
        try{
            return this.ownerService.create(input);  
        }catch(error){
            throw new GraphQLError("Error creating owner",{
                extensions:{
                    code:"INTERNAL_SERVER_ERROR",
                    error: error?.message || "Unknown error",
                }
            })
        }


    }
}