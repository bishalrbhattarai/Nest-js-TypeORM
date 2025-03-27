import { Property } from "src/property/entities/property.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PropertyFeature {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bedrooms: number;

    @Column()
    bathrooms: number;

    @Column()
    parkingSpots: number;

    @Column()
    area: number;

    @Column()
    hasBalcony: boolean;

    @OneToOne(()=>Property,(property)=>property.propertyFeature)
    @JoinColumn()
    property:Property;

}
