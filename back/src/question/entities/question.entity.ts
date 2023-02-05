import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Category} from "../../category/entities/category.entity";

@Entity()
export class Question {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: 'text'})
  content: string;

  @Column({type: 'float', default: 0})
  rating: number;

  @Column({type: 'text'})
  preview_content: string;

  @ManyToOne(() => User, (user) => user.questions)
  user: User

  @ManyToOne(() => Category, (category) => category.questions)
  category: Category

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
