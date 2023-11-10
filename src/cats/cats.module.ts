import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './cat.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohid10587:TwhufCSu0zhSDG7U@cluster0.ndnk1mu.mongodb.net/first-nest-app?retryWrites=true&w=majority',
      {},
    ),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
