import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env',
    }),
    MongooseModule.forRoot('mongodb+srv://svlad4117:IW99hkGVz5xfddiv@cluster0.phvmggr.mongodb.net/Animals-for-sale?retryWrites=true&w=majority'),
    AnimalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
