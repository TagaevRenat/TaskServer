import { Injectable } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { Task } from "./task.entity";
import { ITask } from "./task.Interface";

@Injectable()
export class TestService {
    private tasks: ITask[] = []

    getTasks(): ITask[] {
        return this.tasks
    }

    getTaskById(id: string): ITask {
        return this.tasks.find(t => t.id === +id)
    }

    postNewTask({ task, tags, status }: CreateTaskDTO): ITask {
        const newTask = new Task(task, tags, status)
        this.tasks.push(newTask)
        return newTask
    }
}