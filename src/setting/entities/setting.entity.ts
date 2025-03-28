import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Setting{

    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(()=> Boolean)
    @Column({default: false})
    notification: boolean;

    @Field(()=> Boolean)
    @Column({default: false})
    darkMode: boolean;

    @Field(()=> Owner)
    @OneToOne(() => Owner, (owner) => owner.setting)
    owner: Owner;
}