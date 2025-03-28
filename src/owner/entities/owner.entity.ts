import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}