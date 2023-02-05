import {Category} from "../../category/entities/category.entity";
import {IsDefined, IsString} from "class-validator";

export class CreateQuestionDto {
  @IsDefined()
  @IsString()
  slug: string;

  @IsDefined()
  @IsString()
  title: string;

  @IsDefined()
  @IsString()
  content: string;

  @IsDefined()
  category_id: Category;

  @IsDefined()
  @IsString()
  preview_content: string;
}
