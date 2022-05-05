import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
BaseEntity} from "typeorm";
@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    // @Column({unique: true}) // para que no se repita el email
    // email: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;

}