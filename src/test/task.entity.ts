import { ITask, Status } from "./task.Interface";

export class Task implements ITask {
    task: string;
    id = new Date().getTime()
    status: Status = Status.CREATED;
    tags: string[] = [];
    updatedAt: Date = new Date();
    createdAt: Date = new Date();
    constructor(task: string, tags?: string[], status?: Status) {
        this.task = task;
        this.tags = tags;
        this.status = status;
    }
}