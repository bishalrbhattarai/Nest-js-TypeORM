import { PropertyFeature } from "src/property-feature/entities/property-feature.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
 
    @Column({nullable:false})
    description:string;

    @Column({default:0})
    price:number;

    @OneToOne(()=>PropertyFeature,(propertyFeature)=>propertyFeature.property,{cascade:true})
    propertyFeature:PropertyFeature;

    @ManyToOne(()=>User,(user)=>user.properties)
    @JoinColumn()
    user:User; 
}

