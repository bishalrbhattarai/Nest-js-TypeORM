import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Setting } from "src/setting/entities/setting.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Owner{

    @Field(()=>Int) 
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    email: string;

    @Field(()=> Setting,{nullable: true})
    @OneToOne(()=>Setting, (setting) => setting.id, {cascade: true})
    @JoinColumn()
    setting: Setting; 
}