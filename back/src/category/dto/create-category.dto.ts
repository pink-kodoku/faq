import {IsDefined, IsString, MaxLength} from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsDefined()
    @MaxLength(255)
    name: string;

    @IsString()
    @IsDefined()
    @MaxLength(255)
    slug: string;
}
