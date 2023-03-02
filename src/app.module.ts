import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoModel, DemoSchema } from './mongodb/schema/demo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forFeature([{ name: DemoModel.name, schema: DemoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
