import { Task } from '@prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const task = {
      title: dto.title,
    };
    return await this.prisma.task.create({
      data: task,
    });
  }

  async findAll(): Promise<Task[]> {
    return await this.prisma.task.findMany();
  }

  async deleteById(id: number): Promise<Task> {
    return await this.prisma.task.delete({ where: { id } });
  }

  async findByOne(id: number): Promise<Task | null> {
    const task = await this.prisma.task.findFirst({
      where: { id },
    });

    if (task == null) {
      throw new HttpException('tarefa não encontrada', HttpStatus.NOT_FOUND);
    }
    return task;
  }
}
