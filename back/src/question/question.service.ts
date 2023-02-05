import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateQuestionDto} from './dto/create-question.dto';
import {UpdateQuestionDto} from './dto/update-question.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Question} from "./entities/question.entity";

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>
  ) {
  }


  async create(createQuestionDto: CreateQuestionDto) {
    const newQuestion = await this.questionRepository.create(createQuestionDto);
    await this.questionRepository.save(newQuestion);
    return newQuestion;
  }

  async findAll(options: IPaginationOptions) {
    return await paginate<Question>(this.questionRepository, options);
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOneBy({id});
    if (!question) {
      throw new NotFoundException()
    }

    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    await this.questionRepository.update(id, updateQuestionDto);
    const updatedQuestion = await this.questionRepository.findOneBy({id});
    if (updatedQuestion) {
      return updatedQuestion;
    }
    throw new NotFoundException()
  }

  async remove(id: number) {
    const deleteResponse = await this.questionRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException()
    }
  }
}
