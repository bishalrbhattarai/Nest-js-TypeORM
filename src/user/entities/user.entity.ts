import { Property } from "src/property/entities/property.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email:string;

    @OneToMany(()=>Property,(property)=>property.user,{cascade:true})
    properties: Array<Property>
}
