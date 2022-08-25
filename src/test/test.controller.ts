import { TestService } from "./test.service";
import { Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { ITask } from "./task.Interface";
import { Get, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-task.dto";

@Controller('tasks')
export class TestController {
    constructor(private TestService: TestService) { }
    @Get()
    getTasks(): ITask[] {
        return this.TestService.getTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): ITask {
        return this.TestService.getTaskById(id)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    postNewTask(@Body() task: CreateTaskDTO): ITask {
        return this.TestService.postNewTask(task)
    }
}