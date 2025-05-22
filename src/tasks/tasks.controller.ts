import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.tasksService.deleteById(id);
  }

  @Get(':id')
  findByOne(@Param('id') id: number) {
    return this.tasksService.findByOne(id);
  }
}
