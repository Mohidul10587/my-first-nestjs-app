import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async create(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return newCat.save();
  }
}
