import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  DefaultValuePipe, ParseIntPipe
} from '@nestjs/common';
import {QuestionService} from './question.service';
import {CreateQuestionDto} from './dto/create-question.dto';
import {UpdateQuestionDto} from './dto/update-question.dto';
import RequestWithUser from "../authentication/requestWithUser.interface";
import JwtAuthenticationGuard from "../authentication/jwt-authentication.guard";
import RoleGuard from "../user/role.guard";
import Role from "../user/role.enum";

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  @UseGuards(RoleGuard(Role.Admin))
  async create(@Body() createQuestionDto: CreateQuestionDto, @Req() request: RequestWithUser) {
    console.log(request.user)
    return await this.questionService.create(createQuestionDto);
  }

  @Get()
  async findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
                @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,) {
    limit = limit > 100 ? 100 : limit;
    return await this.questionService.findAll({
      page,
      limit
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questionService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return await this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionService.remove(+id);
  }
}
