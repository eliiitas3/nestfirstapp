import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTasks(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTasks(newTask.tittle, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: updateTaskDto) {
    return this.tasksService.updateTasks(id, updateFields);
  }
}
