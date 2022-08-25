import { IsString, ArrayNotEmpty, IsEnum, IsNotEmpty } from "class-validator";
import { Status } from "../task.Interface";

export class CreateTaskDTO {
    @IsString({ message: 'Введите название!' })
    @IsNotEmpty({ message: 'Введите название!' })
    task: string;

    @IsString({ each: true, message: 'Теги должны быть строчными' })
    @ArrayNotEmpty({ message: 'Нужен хотя бы один тег' })
    tags?: string[];

    @IsEnum(Status, { message: 'Неверный тип статуса!' })
    status?: Status;
}