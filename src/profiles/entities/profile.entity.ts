import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    bio: string;

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    avatar: string;

    @OneToOne(() => User, user => user.profile)
    user: User;
}
