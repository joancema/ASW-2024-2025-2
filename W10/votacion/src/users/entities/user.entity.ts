import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column({nullable:true})
    password: string;

    @Column()
    age:number;

    @Column({default:true})
    status: boolean;
}
