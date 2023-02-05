import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {Question} from "../../question/entities/question.entity";
import Role from "../role.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({unique: true})
    public email: string;

    @Column()
    public name: string;

    @Column()
    @Exclude()
    public password: string;

    @Column({
        type: 'enum',
        enum: Role,
        array: true,
        default: [Role.User]
    })
    @Exclude()
    public roles: Role[]

    @Column({
        nullable: true
    })
    @Exclude()
    public currentHashedRefreshToken?: string;

    @OneToMany(() => Question, (question) => question.user)
    questions: Question[]
}
