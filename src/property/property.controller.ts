import { Controller, Get, Param, ParseIntPipe,  } from "@nestjs/common";
import { CustomIntPipe } from "./pipes/CustomInt.pipe";

const properties = [
    { id: 1, name: "Property One", price: 1000000 },
    { id: 2, name: "Property Two", price: 2000000 },
    { id: 3, name: "Property Three", price: 3000000 }
];


@Controller("property")
export class PropertyController{

        @Get()
        getAllProperty(){
                return properties;
        }


        @Get(":id")
        getProperty(@Param('id',CustomIntPipe) id:string){
            console.log(typeof id)
            return {
                id,
                name : "Property One",
                price: 1000000
            }
        }
}