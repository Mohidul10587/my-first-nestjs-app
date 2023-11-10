import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Post()
  create(@Body() cat: Cat): Promise<Cat> {
    return this.catsService.create(cat);
  }
}
