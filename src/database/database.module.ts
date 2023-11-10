import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohid10587:TwhufCSu0zhSDG7U@cluster0.ndnk1mu.mongodb.net/first-nest-app?retryWrites=true&w=majority',
      {},
    ),
  ],
})
export class DatabaseModule {}
