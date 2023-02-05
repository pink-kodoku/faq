import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Question} from "../../question/entities/question.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public slug: string;

    @OneToMany(() => Question, (question) => question.category)
    questions: Question[]
}
