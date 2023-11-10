import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  // Add other fields as needed
});

export interface Cat extends mongoose.Document {
  name: string;
  age: number;
  breed: string;
  // Add other fields as needed
}
