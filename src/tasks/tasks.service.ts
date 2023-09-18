import { Injectable } from '@nestjs/common';
import { Task, Taskstatus } from './task.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      tittle: 'first task',
      description: 'some task',
      status: Taskstatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTasks(tittle: string, description: string) {
    const task = {
      id: v4(),
      tittle,
      description,
      status: Taskstatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  updateTasks(id: string, updateFields: updateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  getTaskById(id: string): Task {
    return this.tasks.find((tasks) => tasks.id === id);
  }
}
