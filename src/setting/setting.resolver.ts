import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { Setting } from "./entities/setting.entity";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { GraphQLError } from "graphql";
import { SettingService } from "./setting.service";

@Resolver(()=> Setting)
export class SettingResolver{

    constructor(private readonly settingService: SettingService){}
        @Mutation(()=> Setting,{name:"createSetting"})
            createSetting(@Args ("id",{type:()=>Int}) id:number, @Args("input") input: CreateSettingDto){

                try{
                    const owner  = this.settingService.findOne(id);
                    if(!owner) throw new GraphQLError("Owner not found",{
                        extensions:{
                            code:"NOT_FOUND",       
                            error: "Owner not not not found",
                        }
                    })
                    return this.settingService.create(id,input); 
                } catch(error){
                    throw new GraphQLError("Error creating setting",{   
                        extensions:{
                            code:"INTERNAL_SERVER_ERROR",
                            error: error?.message || " new Unknown error",
                        }
                    })
                }

            }

}